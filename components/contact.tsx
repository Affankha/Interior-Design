"use client";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h1 className="text-bold text-5xl text-center text-black">Contact Us</h1>
      <div className="min-h-[60vh] bg-[#5896f4] flex items-center justify-center p-6">
        <div className="bg-white text-black backdrop-blur-md w-full max-w-5xl flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg border-blue-800">
          {/* Left Side - Name and Socials */}

          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold">
                Naz Interior Design & Solutions
              </h1>
              <p className="mt-4 text-sm">
                No.1 Interior Designer in Aurangabad (Chh.Sambhaji nagar)
              </p>
            </div>
            <div className="mt-8 flex space-x-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Menu */}
          <div className="flex-1 p-8 flex flex-col justify-center space-y-6 border-t md:border-t-0 md:border-l border-white/30 ">
            <input
              type="text"
              placeholder="Enter Name"
              className=" border-b border-white/30 pb-2 hover:text-yellow-200 transition-all hover:border-2 border-2"
            />
            <input
              type="number"
              placeholder="Enter Number"
              className=" border-b border-white/30 pb-2 hover:text-yellow-200 transition-all hover:border-2 border-2"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className=" border-b border-white/30 pb-2 hover:text-yellow-200 transition-all hover:border-2 border-2"
            />
            <input
              type="text"
              placeholder="Enter Adress"
              className=" border-b border-white/30 pb-2 hover:text-yellow-200 transition-all hover:border-2 border-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
