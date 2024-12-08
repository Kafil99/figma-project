"use client"

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <>
    <div>
    <Navbar/>
      </div>
      <main className="min-h-screen bg-[#F5F5F5] px-4 py-8 md:px-8 lg:px-16">
              <div className="mx-auto max-w-7xl">
                  <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                      {/* Product Image */}
                      <div className="w-full md:w-1/2">
                          <div className="aspect-square w-full bg-[#F5F5F5]">
                              <img
                                  src="/Images/Dandychair.png"
                                  alt="The Dandy Chair - A black modern chair with metal frame"
                                  className="h-full w-full object-contain" />
                          </div>
                      </div>

                      {/* Product Details */}
                      <div className="w-full md:w-1/2">
                          <h1 className="font-clash-display text-4xl font-medium text-gray-900 md:text-5xl">
                              The Dandy Chair
                          </h1>

                          <p className="mt-4 text-2xl font-medium text-gray-900">£250</p>

                          <div className="mt-8">
                              <h2 className="text-lg font-medium text-gray-900">Description</h2>
                              <p className="mt-2 text-gray-600">
                                  A timeless design, with premium materials features as one of our
                                  most popular and iconic pieces. The dandy chair is perfect for
                                  any stylish living space with beech legs and lambskin leather
                                  upholstery.
                              </p>

                              <ul className="mt-6 space-y-2 text-gray-600">
                                  <li>• Premium material</li>
                                  <li>• Handmade upholstery</li>
                                  <li>• Quality timeless classic</li>
                              </ul>
                          </div>

                          <div className="mt-8">
                              <h2 className="text-lg font-medium text-gray-900">Dimensions</h2>
                              <table className="mt-4 w-full text-left">
                                  <thead>
                                      <tr className="border-b text-sm">
                                          <th className="pb-2">Height</th>
                                          <th className="pb-2">Width</th>
                                          <th className="pb-2">Depth</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr className="text-gray-600">
                                          <td className="pt-2">110cm</td>
                                          <td className="pt-2">75cm</td>
                                          <td className="pt-2">50cm</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>

                          <div className="mt-8 flex items-center gap-4">
                              <div className="flex items-center">
                                  <span className="mr-4 text-gray-700">Amount:</span>
                                  <button
                                      onClick={decreaseQuantity}
                                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                                      aria-label="Decrease quantity"
                                  >
                                      <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="mx-4 min-w-[2rem] text-center">
                                      {quantity}
                                  </span>
                                  <button
                                      onClick={increaseQuantity}
                                      className="flex h-8 w-8 items-center justify-center rounded-full border"
                                      aria-label="Increase quantity"
                                  >
                                      <Plus className="h-4 w-4" />
                                  </button>
                              </div>

                              <button className="rounded bg-[#2A254B] px-8 py-2 text-white transition hover:bg-[#2A254B]/90">
                                  Add to cart
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </main></>
  );
}

