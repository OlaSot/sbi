'use client';

export function CallToActionSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Don&apos;t Miss Out <br />
          Start Automating Now
        </h2>
        <p className="text-gray-700 mb-8">
          Join the automation revolution and elevate your business efficiency with SBI Robotix today!
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-[#FFCE2B] rounded-[10px] text-black font-medium ">
            Talk
          </button>
          <button className="px-6 py-2 border rounded-[10px] border-black text-black font-medium ">
            Now
          </button>
        </div>
      </div>

      {/* Subscribe Block */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h4 className="font-semibold text-black mb-1">Subscribe to Updates</h4>
          <p className="text-gray-600">Stay informed about the latest in automation technology.</p>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email Here"
              className="border-[2px] border-black text-black px-4 rounded-[10px] py-2 w-full md:w-80"
            />
            <button className="border-[2px] rounded-[10px] border-black px-6 py-2 text-black">
              Join
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
