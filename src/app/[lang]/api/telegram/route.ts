import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;
    
    // Get Telegram bot token and chat ID from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: 'Telegram configuration is missing' },
        { status: 500 }
      );
    }
    
    // Format the message to be sent
    const text = `
🔔 New form submission:

👤 Name: ${name || 'Not provided'}
📞 Phone: ${phone || 'Not provided'}
💬 Message: ${message || 'Not provided'}
    `.trim();
    
    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    );
    
    const telegramData = await telegramResponse.json();
    
    if (!telegramResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to send message to Telegram', details: telegramData },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 