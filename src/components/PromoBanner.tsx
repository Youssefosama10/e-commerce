"use client";

import { motion } from "framer-motion";

export default function PromoDoubleBanner() {
  return (
    <section className="mt-10 px-2 md:px-0">
      <div className="grid gap-4 lg:gap-6 md:grid-cols-2 overflow-hidden">
        {/* Left banner - Fresh Organic Fruits */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#008C5F] to-[#00a86b] p-6 md:p-8 lg:p-9 text-white shadow-lg border border-white/20"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-black/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col gap-4 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs md:text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ffeaa7]" />
              <span>Deal of the Day</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                Fresh Organic Fruits
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Get up to 40% off on selected organic fruits and fresh picks.
              </p>
            </div>

            <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                40% OFF
              </span>
              <span className="text-xs md:text-sm text-white/80">
                Use code: <span className="font-semibold tracking-wide">ORGANIC40</span>
              </span>
            </div>

            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center px-4 md:px-5 py-2 rounded-full bg-white text-[#008C5F] text-xs md:text-sm font-semibold shadow hover:shadow-md hover:-translate-y-0.5 transition duration-200"
            >
              Shop Now
              <span aria-hidden className="ml-2">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right banner - Exotic Vegetables */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FF5746] to-[#cb3939] p-6 md:p-8 lg:p-9 text-white shadow-lg border border-white/20"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-14 -right-10 w-36 h-36 bg-black/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col gap-4 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-white/20 backdrop-blur-md text-xs md:text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ffeaa7]" />
              <span>New Arrivals</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                Exotic Vegetables
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Discover our latest collection of premium and exotic veggies.
              </p>
            </div>

            <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                25% OFF
              </span>
              <span className="text-xs md:text-sm text-white/80">
                Use code: <span className="font-semibold tracking-wide">FRESH25</span>
              </span>
            </div>

            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center px-4 md:px-5 py-2 rounded-full bg-white text-[#FF4C4B] text-xs md:text-sm font-semibold shadow hover:shadow-md hover:-translate-y-0.5 transition duration-200"
            >
              Explore Now
              <span aria-hidden className="ml-2">
                →
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

