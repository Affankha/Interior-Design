"use client";

import Image from "next/image";
import Link from "next/link";

export default function ModernStyleCharm() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/img9.jpg" // Replace with actual image from your public folder
            alt="Modern Living Room"
            width={1000}
            height={700}
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm text-gray-700 mb-2">Elegance ・ Timeless</p>
          <h2 className="text-5xl font-bold leading-tight text-black mb-6">
            Modern Style <br /> Timeless Charm
          </h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            Discover Poliform's 2024 preview, featuring sofas, chairs, and
            armchairs embodying diverse lifestyle concepts, alongside striking
            tables, coffee tables, and sideboards.
          </p>
          <Link
            href="/about"
            className="inline-block bg-black text-white px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-gray-800"
          >
            About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
