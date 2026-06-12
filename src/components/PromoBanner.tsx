"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFire } from "react-icons/fa6";

export default function PromoDoubleBanner() {
  return (
    <section className="mt-10 px-4 md:px-6 lg:px-8 xl:px-10 overflow-x-hidden">
<div  className="grid grid-cols-1 lg:grid-cols-2 gap-7">
  {/* Left Banner */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative overflow-hidden rounded-[15px] bg-[linear-gradient(135deg,#0BBC79_0%,#059660_100%)] px-8 py-8 min-h-[280px]"
  >
    <div className="absolute -top-10 right-[-25px] w-28 h-28 rounded-full bg-white/10" />
    <div className="absolute -bottom-10 left-[-25px] w-24 h-24 rounded-full bg-white/10" />

    <div className="relative z-10 flex flex-col">
      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full w-fit">
        <span>🔥</span>
        <span className="text-white font-medium text-sm">
          Deal of the Day
        </span>
      </div>

      <h3 className="mt-5 text-white text-[40px] leading-[1.1] font-extrabold">
        Fresh Organic Fruits
      </h3>

      <p className="mt-3 text-white/85 text-[16px]">
        Get up to 40% off on selected organic fruits
      </p>

      <div className="flex items-center gap-3 mt-5 flex-wrap">
        <span className="text-white text-[42px] leading-none font-extrabold">
          40% OFF
        </span>

        <span className="text-white/80 text-[15px]">
          Use code:
          <span className="font-bold text-white ml-1">
            ORGANIC40
          </span>
        </span>
      </div>

      <Link href="/shop" className="mt-7">
        <button className="h-14 px-7 rounded-full bg-[#ECECEC] text-[#059660] text-[17px] font-semibold flex items-center gap-3 cursor-pointer hover:scale-[1.02] transition">
          Shop Now
          <span className="text-[22px]">→</span>
        </button>
      </Link>
    </div>
  </motion.div>

  {/* Right Banner */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative overflow-hidden rounded-[15px] bg-[linear-gradient(135deg,#FF8A1F_0%,#FF3864_100%)] px-8 py-8 min-h-[280px]"
  >
    <div className="absolute -top-10 right-[-25px] w-28 h-28 rounded-full bg-white/10" />
    <div className="absolute -bottom-10 left-[-25px] w-24 h-24 rounded-full bg-white/10" />

    <div className="relative z-10 flex flex-col">
      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full w-fit">
        <span>✨</span>
        <span className="text-white font-medium text-sm">
          New Arrivals
        </span>
      </div>

      <h3 className="mt-5 text-white text-[40px] leading-[1.1] font-extrabold">
        Exotic Vegetables
      </h3>

      <p className="mt-3 text-white/85 text-[16px]">
        Discover our latest collection of premium vegetables
      </p>

      <div className="flex items-center gap-3 mt-5 flex-wrap">
        <span className="text-white text-[42px] leading-none font-extrabold">
          25% OFF
        </span>

        <span className="text-white/80 text-[15px]">
          Use code:
          <span className="font-bold text-white ml-1">
            FRESH25
          </span>
        </span>
      </div>

      <Link href="/shop" className="mt-7">
        <button className="h-14 px-7 rounded-full bg-[#ECECEC] text-[#FF6A1C] text-[17px] font-semibold flex items-center gap-3 cursor-pointer hover:scale-[1.02] transition">
          Explore Now
          <span className="text-[22px]">→</span>
        </button>
      </Link>
    </div>
  </motion.div>
</div>
    </section>
  );
}

