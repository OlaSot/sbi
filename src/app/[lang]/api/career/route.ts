import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const surname = formData.get('surname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const city = formData.get('city') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resumeFile = formData.get('resumeFile') as File | null;
    
    // Debug form data
    console.log('Form data received:');
    console.log('- Name:', name, surname);
    console.log('- Resume file:', resumeFile ? `${resumeFile.name} (${resumeFile.size} bytes)` : 'Not provided');
    
    // List all form data keys for debugging
    console.log('All form data keys:');
    const formDataKeys = Array.from(formData.keys());
    console.log(formDataKeys);

    // Validate required fields
    if (!name || !surname || !email || !phone || !country || !city || !position) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // Get Telegram configuration
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: 'Telegram configuration is missing' },
        { status: 500 }
      );
    }

    // Format the message text
    const messageText = `
🔔 New Career Application:

👤 Name: ${name} ${surname}
📧 Email: ${email}
📞 Phone: ${phone}
🌍 Country: ${country}
🏙️ City: ${city}
💼 Desired Position: ${position}
⚙️ Experience: ${experience || 'Not provided'}
📝 Cover Letter: ${coverLetter || 'Not provided'}
    `.trim();

    // Send text message to Telegram
    const textResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
        }),
      }
    );
    
    if (!textResponse.ok) {
      const errorData = await textResponse.json();
      console.error('Telegram text message error:', errorData);
      throw new Error('Failed to send message to Telegram');
    }

    // If there's a resume file, send it as a document
    if (resumeFile) {
      try {
        console.log('Processing resume file upload to Telegram...');
        
        // Create temporary file
        const tempDir = os.tmpdir();
        const tempFilePath = path.join(tempDir, resumeFile.name);
        
        // Save file to temp directory
        const bytes = await resumeFile.arrayBuffer();
        await fs.writeFile(tempFilePath, Buffer.from(bytes));
        console.log('File saved to temp directory:', tempFilePath);
        
        // Use curl to send the file - more reliable than fetch for binary data
        const formDataBoundary = '---------------------------' + Date.now().toString(16);
        
        // Create form data manually
        let formDataBody = '';
        
        // Add chat_id
        formDataBody += `--${formDataBoundary}\r\n`;
        formDataBody += `Content-Disposition: form-data; name="chat_id"\r\n\r\n`;
        formDataBody += `${chatId}\r\n`;
        
        // Add caption
        formDataBody += `--${formDataBoundary}\r\n`;
        formDataBody += `Content-Disposition: form-data; name="caption"\r\n\r\n`;
        formDataBody += `Resume for ${name} ${surname}\r\n`;
        
        // Add document header (without the actual file content)
        formDataBody += `--${formDataBoundary}\r\n`;
        formDataBody += `Content-Disposition: form-data; name="document"; filename="${resumeFile.name}"\r\n`;
        formDataBody += `Content-Type: ${resumeFile.type || 'application/octet-stream'}\r\n\r\n`;
        
        // Create the beginning of the form data
        const formDataStart = Buffer.from(formDataBody, 'utf-8');
        
        // Read the file
        const fileContent = await fs.readFile(tempFilePath);
        
        // Create the end of the form data
        const formDataEnd = Buffer.from(`\r\n--${formDataBoundary}--\r\n`, 'utf-8');
        
        // Combine all parts
        const formDataComplete = Buffer.concat([
          formDataStart,
          fileContent,
          formDataEnd
        ]);
        
        // Send the file to Telegram
        const fileResponse = await fetch(
          `https://api.telegram.org/bot${botToken}/sendDocument`,
          {
            method: 'POST',
            headers: {
              'Content-Type': `multipart/form-data; boundary=${formDataBoundary}`,
              'Content-Length': formDataComplete.length.toString()
            },
            body: formDataComplete
          }
        );
        
        const fileResponseData = await fileResponse.json();
        console.log('Telegram file response status:', fileResponse.status);
        
        if (!fileResponse.ok) {
          console.error('Telegram file API error:', fileResponseData);
          throw new Error(`Failed to send file: ${fileResponseData.description || 'Unknown error'}`);
        }
        
        // Clean up temp file
        await fs.unlink(tempFilePath);
        console.log('Temporary file deleted');
      } catch (fileError) {
        console.error('Error sending file:', fileError);
        // Continue with the response even if file upload fails
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
} 