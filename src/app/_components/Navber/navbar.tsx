import Image from "next/image";
import logo from "@image/logo.png";
import NavToggle from "./NavToggel";
import Link from "next/link";
import NavAuth from "./NavAuth";
import NavCart from "./NavCart";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={logo}
            alt="Chess Logo"
            className="w-16 h-auto bg-white"
            priority
          />
          <span className="text-2xl font-semibold tracking-widest text-[#fffbfb]">
            CHESS
          </span>
        </Link>

        {/* Navigation */}
        <NavToggle>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 text-[#fffbfb]">
            
            <li><Link href="#home" className="nav-link">Home</Link></li>
            <li><Link href="#about" className="nav-link">About</Link></li>
            <li><Link href="#products" className="nav-link">Products</Link></li>
            <li><Link href="#services" className="nav-link">Services</Link></li>
            <li><Link href="#contact" className="nav-link">Contact</Link></li>

            <NavCart />
            <NavAuth />
          </ul>
        </NavToggle>
      </div>
    </nav>
  );
}
