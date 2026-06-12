"use client";

import { motion } from "framer-motion";
import {
  FaTruck,
  FaShieldHalved,
  FaArrowRotateLeft,
  FaHeadset,
} from "react-icons/fa6";

export default function CaptionTow() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      desc: "On orders over 500 EGP",
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure Payment",
      desc: "100% secure transactions",
      bg: "bg-green-100",
      color: "text-green-500",
    },
    {
      icon: <FaArrowRotateLeft />,
      title: "Easy Returns",
      desc: "14-day return policy",
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated support team",
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="grid bg-[#F9FAFB]  py-8 px-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bg}`}
          >
            <span className={`text-lg ${item.color}`}>
              {item.icon}
            </span>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="text-sm text-slate-500">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
