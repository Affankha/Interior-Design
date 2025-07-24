"use client";

import { data1 } from "../data/data";
import Image from "next/image";
import Link from "next/link";
import ModernMinimalist from "../components/modernminimalist";
import ModernStyleCharm from "../components/ModernStyleCharm";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="font-sans bg-[#fdfbf6] text-[#1a1a1a]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        {/* <h1 className="text-xl font-bold">Poliform</h1> */}
        <Image src="/logo.jpg" alt="logo" width={100} height={100}></Image>
        <nav className="space-x-6 font-mono font-bold text-lg">
          <Link href="#">Product</Link>
          <Link href="#">Lifestyle</Link>
          <Link href="#">News</Link>
          <Link href="#">Projects</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/img10.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="object-cover object-top"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-6xl font-bold text-white">Contemporary</h2>
        </div>
      </section>
      <ModernMinimalist />

      {/* Modern Minimalist */}
      <section className="py-16 max-w-7xl mx-auto px-4 text-3xl">
        {/* <h3 className="text-3xl font-semibold mb-6">Modern Minimalist</h3> */}
        <div className="grid md:grid-cols-4 text-center gap-6">
          <div>
            <p className=" font-semibold text-3xl">500+</p>
            <p>Products</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">20+</p>
            <p>Projects</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">50+</p>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">1st</p>
            <p>Top in Paris</p>
          </div>
        </div>
      </section>

      {/* Timeless Charm */}
      <ModernStyleCharm />

      {/* Collection Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-10 text-center">
          Explore Our Proudly Collection
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {data1.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden hover:bg-neutral-700/60 z-9"
            >
              <div className="bg-gray-300 w-100 h-48 ">
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  width={1000}
                  height={30}
                  className=" z-2 w-full h-48 object-cover  "
                />
              </div>
              <div className="p-4 ">
                <h4 className="text-xl font-medium ">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-4">About</h5>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Store Locator</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Customer Service</h5>
            <ul className="space-y-2 text-sm">
              <li>Prices and Payments</li>
              <li>Shipping</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Social Media</h5>
            <ul className="space-y-2 text-sm">
              <div className="flex gap-5">
                <Image
                  alt="instgaram-logo"
                  src="/instagram-logo.png"
                  height={10}
                  width={10}
                  className="w-6 gap-2"
                />
                <li>Instagram</li>
              </div>
              <div className="flex gap-5">
                {" "}
                <Image
                  alt="Facebook logo"
                  src="/facebook.png"
                  height={10}
                  width={10}
                  className="w-6 "
                />
                <li>Facebook</li>
              </div>
              <div className="flex gap-5">
                <Image
                  alt="twitter logo"
                  src="/twitter.jpeg"
                  height={10}
                  width={10}
                  className="w-6"
                />
                <li>Twitter</li>
              </div>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Location</h5>
            <p className="text-sm">
              Dargah Road, Shahnurwadi <br />
              Aurangabad 431003 <br />
              <br />
              +91 9289....
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
