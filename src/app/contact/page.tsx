"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
        {/* Left Side - Info */}
        <div className="bg-kesor-dark text-white p-10 lg:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-kesor-purple rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
              Get in touch
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Have questions about our parts, dealerships, or events? Our team
              is ready to help you upgrade your ride.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-kesor-red transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    Call / Text
                  </p>
                  <p className="font-bold text-lg">0925 346 4647</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-kesor-red transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    TikTok / Socials
                  </p>
                  <p className="font-bold text-lg">@KesobyJayArcambaog</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-kesor-red transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    Email Support
                  </p>
                  <p className="font-bold text-lg">support@kesor.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10 lg:p-16 lg:w-3/5 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Send us a message
          </h2>

          {submitted && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-r-lg font-semibold mb-8 animate-pulse">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kesor-purple focus:border-kesor-purple focus:bg-white focus:outline-none transition-all"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kesor-purple focus:border-kesor-purple focus:bg-white focus:outline-none transition-all"
                  placeholder="juan@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kesor-purple focus:border-kesor-purple focus:bg-white focus:outline-none transition-all"
                placeholder="Product Inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-kesor-purple focus:border-kesor-purple focus:bg-white focus:outline-none transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-kesor-purple hover:bg-purple-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(74,0,160,0.2)] hover:shadow-[0_10px_25px_rgba(74,0,160,0.4)] hover:-translate-y-0.5"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
