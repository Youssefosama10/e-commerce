"use client";

import { useState } from "react";
import { FaLeaf, FaTruck, FaTag, FaStar, FaBolt } from "react-icons/fa";
import { FaApple, FaGooglePlay, FaEnvelope, FaMobileScreenButton } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function MobileApp() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100 py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* ── LEFT: Newsletter ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col justify-between"
        >

          {/* Badge */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-green-600">Newsletter</p>
                <p className="text-[11px] text-slate-400">50,000+ subscribers</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight mb-3">
              Get the Freshest Updates{" "}
              <span className="text-green-500">Delivered Free</span>
            </h2>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Weekly recipes, seasonal offers &amp; exclusive member perks.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <FaLeaf className="text-green-500" />, label: "Fresh Picks Weekly" },
                { icon: <FaTruck className="text-green-500" />, label: "Free Delivery Codes" },
                { icon: <FaTag className="text-green-500" />, label: "Members-Only Deals" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 bg-green-50 border border-green-100 text-slate-700 text-xs font-medium px-4 py-2 rounded-full"
                >
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Input + Button */}
          <div>
            <div className="flex gap-3 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="you@example.com"
                className="flex-1 border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-700 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition bg-slate-50 placeholder-slate-400"
              />
            <button
  onClick={handleSubscribe}
  className="hidden sm:flex bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold text-sm px-6 py-3 rounded-xl items-center gap-2 transition-all whitespace-nowrap shadow"
>
  {subscribed ? "✓ Subscribed!" : <>Subscribe <HiArrowRight /></>}
</button>
            </div>
            <p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
              <FaBolt className="text-yellow-400" /> Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT: Mobile App Dark Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #1a2f3a 100%)",
          }}
        >
          {/* Decorative glow blobs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              <FaMobileScreenButton /> Mobile App
            </span>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2">
              Shop Faster on Our App
            </h2>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Get app-exclusive deals &amp; 15% off your first order.
            </p>

            {/* Store Buttons */}
            <div className="space-y-3">
              {/* App Store */}
              <button className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 active:scale-98 border border-white/10 rounded-xl px-5 py-3.5 transition-all group">
                <FaApple className="text-white text-2xl shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-300 transition">Download on</p>
                  <p className="text-white font-semibold text-sm">App Store</p>
                </div>
              </button>

              {/* Google Play */}
              <button className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 active:scale-98 border border-white/10 rounded-xl px-5 py-3.5 transition-all group">
                <FaGooglePlay className="text-white text-xl shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-300 transition">Get it on</p>
                  <p className="text-white font-semibold text-sm">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="relative z-10 flex items-center gap-2 mt-8 pt-6 border-t border-white/10">
            <div className="flex text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i === 4 ? "opacity-50" : ""} />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.9</span>
            <span className="text-slate-400 text-xs">·</span>
            <span className="text-green-400 font-semibold text-xs">100K+</span>
            <span className="text-slate-400 text-xs">downloads</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}