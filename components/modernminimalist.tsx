"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ModernMinimalist() {
  return (
    <section className="bg-white px-4 py-10 md:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 items-center">
        {/* Main Left Content */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden">
          <Image
            src="/img1.jpg" // Replace with actual image path
            alt="Modern Minimalist Interior"
            width={1600}
            height={1000}
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-4 rounded-xl">
            <p className="text-sm text-gray-600 font-medium mb-1">
              Gorgeous Interior
            </p>
            <h2 className="text-4xl font-bold text-black leading-tight">
              Modern
              <br />
              Minimalist
            </h2>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          {/* Top Card */}
          <div className="bg-[#f4ebe4] p-6 rounded-2xl text-center">
            <div className="w-full mx-auto text-center justify-center">
              <p className="text-xs border border-black inline-block px-2 py-1 rounded-full mb-3 text-center">
                Aesthetic
              </p>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              Aesthetic furniture where every piece tells a story of style
            </p>
            <h3 className="text-2xl font-semibold text-black">
              Where Every Room Becomes a Gallery of Style
            </h3>
          </div>

          {/* Bottom Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/img7.jpg" // Replace with actual image path
              alt="Best Furniture"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 p-5 flex flex-col justify-end text-white">
              <p className="text-xs border border-white inline-block px-2 py-1 rounded-full mb-2">
                Best Furniture
              </p>
              <p className="text-sm">
                Indulge in the artistry of everyday living
              </p>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
              <ArrowUpRight className="text-black" size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
