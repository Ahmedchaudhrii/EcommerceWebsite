import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // ✅ profile dropdown state

  return (
    <nav className="bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/pictures/WhatsApp Image 2025-10-02 at 20.29.16.jpeg"
                alt="Logo"
                className="w-auto h-10"
              />
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden space-x-6 md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Icons */}
          <div className="relative flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 3h18l-1.5 13.5H4.5L3 3z" />
              </svg>
              <span className="absolute px-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">2</span>
            </Link>

            {/* Profile */}
            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)}>
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5.121 17.804A4 4 0 0112 21a4 4 0 016.879-3.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 z-50 w-40 py-2 mt-2 bg-white rounded-md shadow-lg">
                  <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
                  <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</Link>
                  <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Orders</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white shadow md:hidden">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/products" className="block text-gray-700 hover:text-blue-600">Shop</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/cart" className="block text-gray-700 hover:text-blue-600">Cart</Link>
          <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
