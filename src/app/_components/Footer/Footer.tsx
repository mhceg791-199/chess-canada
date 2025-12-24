import Image from "next/image";
import Link from "next/link";
import logo from "@image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-[#fffbfb]">
      
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Image
              src={logo}
              alt="CHESS Logo"
              className="w-14 h-auto bg-white"
            />
            <span className="text-xl tracking-widest font-semibold">
              CHESS
            </span>
          </div>

          <p className="text-sm text-white/60 leading-relaxed">
            Canadian Home, Electrical, and Supply Solutions.
            <br />
            Powering & Equipping Modern Homes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:opacity-70">Home</Link></li>
            <li><Link href="#about" className="hover:opacity-70">About</Link></li>
            <li><Link href="#products" className="hover:opacity-70">Products</Link></li>
            <li><Link href="#services" className="hover:opacity-70">Services</Link></li>
            <li><Link href="#contact" className="hover:opacity-70">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">
            Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li>Product Warranty</li>
            <li>Delivery Support</li>
            <li>After-Sales Service</li>
            <li>Customer Assistance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>info@chess-home.com</li>
            <li>+1 (000) 123-4567</li>
            <li>Canada</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50 tracking-widest">
        © {new Date().getFullYear()} CHESS. All Rights Reserved.
      </div>

    </footer>
  );
}
