import { MapPin, Phone, MessageCircle } from "lucide-react";
import { FaFacebook } from "react-icons/fa"; // ✅ Imported from react-icons
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-kesor-dark text-white pt-16 pb-8 mt-auto border-t-4 border-kesor-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4 group">
              <div className="relative h-16 w-auto">
                <Image
                  src="/KESO_Graffiti_Emblem_Logo-removebg-preview.png"
                  alt="KESO Logo"
                  width={200}
                  height={64}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Premium Motorcycle Performance Parts & EBikes. Engineered in
              Taiwan for the ultimate riding experience. Unleash the full
              potential of your machine.
            </p>

            {/* Socials - Facebook Only */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook Page"
                className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-kesor-purple cursor-pointer transition-colors duration-300"
              >
                <FaFacebook size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-kesor-red transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-kesor-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-kesor-red transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-kesor-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer"
                  className="hover:text-kesor-red transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-kesor-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Find a Dealer
                </Link>
              </li>
              <li>
                <Link
                  href="/event"
                  className="hover:text-kesor-red transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-kesor-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-kesor-red shrink-0 mt-0.5" />
                <span>0925 346 90907</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <MessageCircle
                  size={18}
                  className="text-kesor-red shrink-0 mt-0.5"
                />
                <span>@Kesoby</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin size={18} className="text-kesor-red shrink-0 mt-0.5" />
                <span>Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; 2026 Keso Motorcycle Performance Parts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
