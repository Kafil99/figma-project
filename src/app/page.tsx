"use client";

import {
  Truck,
  Paintbrush,
  DollarSign,
  Recycle,
} from "lucide-react";
import React from "react";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

// StorySection Component
function StorySection() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              From a studio in London to a global brand with over 400 outlets
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </p>

              <p className="leading-relaxed">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique became the
                hotbed for the London interior design community.
              </p>
            </div>

            <button className="mt-8 px-8 py-4 bg-[#F5F5F5] text-gray-900 hover:bg-gray-200 transition-colors text-sm">
              Get in touch
            </button>
          </div>

          <div className="relative h-[600px] bg-[#F5F5F5]">
            <img
              src="/Images/Sofa2.png"
              alt="Furniture display with plants"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const products = [
    {
      id: 1,
      name: "The Dandy chair",
      price: "£250",
      image: "/Images/RightImage.png",
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: "£155",
      image: "/Images/Vase.png",
    },
    {
      id: 3,
      name: "The Silky Vase",
      price: "£125",
      image: "/Images/Silkyvase.png",
    },
    {
      id: 4,
      name: "The Lucy Lamp",
      price: "£399",
      image: "/Images/Lucylamp.png",
    },
  ];

  const popularProducts = [
    {
      id: 1,
      name: "The Poplar suede sofa",
      price: "£980",
      image: "/Images/Sofa.png",
      isLarge: true,
    },
    {
      id: 2,
      name: "The Dandy chair",
      price: "£250",
      image: "/Images/RightImage.png",
    },
    {
      id: 3,
      name: "The Dandy chair",
      price: "£250",
      image: "/Images/Chair.png",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 mb-4" />,
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <Paintbrush className="w-8 h-8 mb-4" />,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      icon: <DollarSign className="w-8 h-8 mb-4" />,
      title: "Unbeatable prices",
      description:
        "For our materials and quality you won't find better prices anywhere",
    },
    {
      icon: <Recycle className="w-8 h-8 mb-4" />,
      title: "Recycled packaging",
      description:
        "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          <div className="bg-[#2A254B] p-8 md:p-16 flex flex-col justify-between relative min-h-[600px]">
            <div>
              <h1 className="text-5xl text-white mb-8 font-bold leading-tight tracking-wider">
                The furniture brand for the future, with timeless designs
              </h1>
              <button className="bg-[#2A254B] border border-white/20 text-white px-10 py-5 hover:bg-white/10 transition-all rounded-lg text-lg font-medium">
                View Collection
              </button>
            </div>
            <div className="mt-auto">
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand offering sophisticated designs combined with modern web technologies.
              </p>
            </div>
          </div>
          <div className="relative min-h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-black/50"></div> {/* Gradient overlay */}
            <img
              src="/Images/RightImage.png"
              alt="Modern chair"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-24 px-4 bg-[#F9F9F9]">
        <h2 className="text-2xl md:text-3xl text-center mb-16 font-semibold">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-6 text-[#2A254B]">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-2xl font-normal mb-12">New Ceramics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden bg-[#F5F5F5] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-[1.1rem] font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border border-gray-900 text-gray-900 px-12 py-3 hover:bg-gray-900 hover:text-white transition-colors text-sm rounded-md">
            View Collection
          </button>
        </div>
      </section>


      {/* Popular Products Section */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-2xl font-normal mb-12">Our Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className={`group ${product.isLarge ? "md:col-span-2 lg:col-span-1" : ""} relative`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F5F5F5] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-[1.1rem] font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border border-gray-900 text-gray-900 px-12 py-3 hover:bg-gray-900 hover:text-white transition-colors text-sm rounded-md">
            View Collection
          </button>
        </div>
      </section>


      {/* Newsletter Section */}
      <Newsletter />

      {/* Story Section */}
      <StorySection />

      <Footer />
    </div>
  );
}
