'use client';

import Image from 'next/image';

export default function SolutionsSection() {
  return (
    <section className="w-full  bg-grey  py-20 px-4">
      <div className="max-w-[1280px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black max-w-[600px]">
            Explore Our Cutting-Edge Automation Solutions for Every Industry Challenge
          </h2>
          <p className="text-gray-700 max-w-[520px]">
            At SBI Robotix, we provide tailored automation solutions that enhance efficiency and productivity. Our robots are designed to integrate seamlessly into your operations, delivering rapid ROI and unmatched reliability. Discover how our innovative technology can transform your business today.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div>
          <div className="w-full h-52 bg-gray-200 rounded-xl mb-4 overflow-hidden">
            <Image
              src="/solutions/photo_1.jpg"
              alt="Robotic Production Lines"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Robotic Production Lines: Streamline Your Manufacturing Process
          </h3>
          <p className="text-gray-600 mb-3">
            Achieve higher output with our automated production lines.
          </p>
         <a href="#" className="text-black font-medium hover:text-yellow-400 transition">
  Learn More →
</a>

        </div>

        {/* Card 2 */}
        <div>
          <div className="w-full h-52 bg-gray-200 rounded-xl mb-4 overflow-hidden">
            <Image
                            src="/solutions/photo_2.jpg"

              alt="Machine Tending"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Machine Tending: Optimize Your Operations with Precision
          </h3>
          <p className="text-gray-600 mb-3">
            Enhance productivity with our machine tending robots that work tirelessly.
          </p>
          <a href="#" className="text-black font-medium hover:text-yellow-400 transition">
  Learn More →
</a>

        </div>

        {/* Card 3 */}
        <div>
          <div className="w-full h-52 bg-gray-200 rounded-xl mb-4 overflow-hidden">
            <Image
                            src="/solutions/photo_3.jpg"

              alt="Collaborative Robots"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Collaborative Robots: Work Smarter, Not Harder
          </h3>
          <p className="text-gray-600 mb-3">
            Our collaborative robots are designed to work alongside your team safely.
          </p>
          <a href="#" className="text-black font-medium hover:text-yellow-400 transition">
  Learn More →
</a>

        </div>
      </div>
    </section>
  );
}
