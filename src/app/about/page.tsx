"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import Navbar2 from "../components/Navbar2";
import StorySection from "../components/Storysection";

export default function HeroSection() {
  return (
    <>
      <div>
        <Navbar2 />
      </div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium max-w-2xl">
            A brand built on the love of craftsmanship, quality, and outstanding
            customer service
          </h1>
          <a
            href="/products" // Add the actual link to your products page
            className="mt-4 sm:mt-0 text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200"
          >
            View our products
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section>
        <StorySection />
      </section>
    </>
  );
}


