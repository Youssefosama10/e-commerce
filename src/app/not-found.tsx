'use client';

import Caption from '_/components/caption/Caption';
import Link from 'next/link';
import { FaShoppingCart, FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
 <>

<section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#f7faf8] via-[#f5faf7] to-[#eef8f2] flex items-center justify-center px-4">

{/* Background Blur */}
<div className="absolute left-20 bottom-20 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
<div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-green-100/30 blur-3xl" />

{/* Floating Shapes */}
<div className="absolute left-24 top-16 text-green-200 text-5xl rotate-12">
  🍏
</div>

<div className="absolute left-72 bottom-64 text-green-200 text-4xl -rotate-12">
  🍏
</div>

<div className="absolute right-52 top-52 text-green-200 text-4xl rotate-12">
  🥕
</div>

<div className="absolute right-28 bottom-80 text-green-200 text-4xl rotate-12">
  🥕
</div>

<div className="absolute left-32 bottom-16 text-green-200 text-4xl -rotate-12">
  🥬
</div>

{/* Content */}
<div className="relative z-10 text-center max-w-3xl mx-auto">

  {/* Illustration */}
  <div className="relative mx-auto w-fit mb-10">
    <div className="w-[220px] h-[180px] rounded-[35px] bg-white/80 backdrop-blur-md shadow-[0_30px_80px_rgba(34,197,94,0.15)] flex items-center justify-center">
      <FaShoppingCart className="text-[65px] text-green-400" />
    </div>

    {/* 404 Badge */}
    <div className="absolute -top-5 right-[-20px] h-24 w-24 rounded-full bg-green-500 border-[10px] border-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] flex items-center justify-center">
      <span className="text-white text-3xl font-extrabold">
        404
      </span>
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center items-center gap-5 mb-10">
    <span className="w-4 h-4 rounded-full bg-green-400" />
    <span className="w-10 h-5 border-b-[4px] border-green-400 rounded-full" />
    <span className="w-4 h-4 rounded-full bg-green-400" />
  </div>

  {/* Title */}
  <h1 className="text-6xl md:text-5xl font-extrabold text-slate-900 leading-tight">
    Oops! Nothing Here
  </h1>

  {/* Description */}
  <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto leading-relaxed max-w-2xl mx-auto">
    Looks like this page went out of stock! Don't worry,
    there's plenty more fresh content to explore.
  </p>

  {/* Buttons */}
  <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
    <Link
      href="/"
      className="h-14 px-8 rounded-3xl bg-green-600 hover:bg-green-700 transition-all text-white font-bold text-lg shadow-[0_10px_30px_rgba(34,197,94,0.35)] flex items-center gap-4"
    >
      <FaHome />
      Go to Homepage
    </Link>

    <button
      onClick={() => window.history.back()}
      className="h-16 px-10 cursor-pointer rounded-3xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-700 font-bold text-2xl shadow-lg flex items-center gap-4"
    >
      <FaArrowLeft />
      Go Back
    </button>
  </div>
</div>
</section>
<Caption   />
    </>
  );
}