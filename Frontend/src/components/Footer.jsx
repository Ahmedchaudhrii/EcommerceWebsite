// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-4">
        {/* Brand / About */}
        <div>
          <h2 className="mb-4 text-xl font-bold">YourStore</h2>
          <p className="text-gray-400">
            YourStore is your go-to place for stylish, high-quality clothing at
            affordable prices. Stay trendy with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/shop" className="hover:text-yellow-500">Shop</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="/faq" className="hover:text-yellow-500">FAQ</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Support</h3>
          <ul className="space-y-2">
            <li><a href="/shipping" className="hover:text-yellow-500">Shipping</a></li>
            <li><a href="/returns" className="hover:text-yellow-500">Returns</a></li>
            <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media / Newsletter */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
          <div className="flex mb-4 space-x-4">
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
          </div>
          <h4 className="mb-2 font-semibold text-md">Subscribe to our Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-white bg-gray-800 border border-gray-700 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 font-semibold bg-yellow-500 rounded-r hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 mt-8 text-center text-gray-500 border-t border-gray-700">
        © 2025 YourStore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
