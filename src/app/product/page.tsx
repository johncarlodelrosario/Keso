"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Removed ShoppingCart from imports

export default function ProductPage() {
  // State for filtering
  const [filter, setFilter] = useState("All");

  // Product Data
  // Note: I used your existing images as placeholders.
  // Replace these paths with your actual product images in the /public folder.
  const products = [
    {
      id: 1,
      name: "KESO Clutch Bell",
      category: "Motorcycle Parts",
      price: "1,500",
      image: "/KESO K350X V4 Urban Dusk Scooter (4).png",
    },
    {
      id: 2,
      name: "Performance Drive Face",
      category: "Motorcycle Parts",
      price: "2,200",
      image: "/KESOY BOLT-ON 5500 Camshaft Showcase (1).png",
    },
    {
      id: 3,
      name: "E-Bike Hub Motor",
      category: "EBike Parts",
      price: "5,500",
      image: "/KESQ K350X V4_ Glide Into the Future.png",
    },
    {
      id: 4,
      name: "KESO Racing Pulley Set",
      category: "Motorcycle Parts",
      price: "1,200",
      image: "/KESO K350X V4 Urban Dusk Scooter (4).png",
    },
    {
      id: 5,
      name: "KESO Center Spring",
      category: "Motorcycle Parts",
      price: "800",
      image: "/KESOY BOLT-ON 5500 Camshaft Showcase (1).png",
    },
    {
      id: 6,
      name: "E-Bike Controller",
      category: "EBike Parts",
      price: "3,500",
      image: "/KESQ K350X V4_ Glide Into the Future.png",
    },
    {
      id: 7,
      name: "KESO Racing Cam",
      category: "Motorcycle Parts",
      price: "4,000",
      image: "/KESO K350X V4 Urban Dusk Scooter (4).png",
    },
    {
      id: 8,
      name: "KESO Valve Spring",
      category: "Motorcycle Parts",
      price: "1,800",
      image: "/KESOY BOLT-ON 5500 Camshaft Showcase (1).png",
    },
  ];

  // Filter logic
  const filteredProducts = products.filter((product) => {
    if (filter === "All") return true;
    return product.category === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-kesor-red transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-gray-200 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-kesor-dark mb-2 uppercase tracking-tight">
            Performance Parts
          </h1>
          <p className="text-gray-500 font-medium">
            Unleash the full potential of your machine.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
          {["All", "Motorcycle Parts", "EBike Parts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === tab
                  ? "bg-kesor-purple text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-kesor-purple/30 transition-all duration-300 group flex flex-col"
          >
            {/* Product Image Container */}
            <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden p-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-kesor-purple shadow-sm uppercase tracking-wide z-10">
                {product.category}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                {product.name}
              </h2>

              {/* Price Only (Cart Removed) */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-2xl font-black text-kesor-dark">
                  <span className="text-sm text-gray-500 font-bold mr-1">
                    ₱
                  </span>
                  {product.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
