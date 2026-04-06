import Image from "next/image";
import Link from "next/link";
import loginIllustration from "@images/images1 (3).png";
import LoginForm from "./loginForm";
import { IoCheckmarkCircle, IoLockClosedOutline, IoPeopleOutline, IoStarOutline } from "react-icons/io5";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left section - Branding */}
        <section className="w-full lg:w-1/2 px-8 py-10 lg:px-10 lg:py-12 bg-white flex flex-col">
          <div className="relative w-full aspect-4/3 max-h-64 mb-6 shrink-0">
            <Image
              src={loginIllustration}
              alt="FreshCart - Fresh products"
              className="object-contain text-center"
              fill
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
            Join thousands of happy customers who trust FreshCart for their daily grocery needs.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
            <span className="flex items-center gap-2">
              <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-[#00B853]" />
              <span className="text-sm font-medium">Free Delivery</span>
            </span>
            <span className="flex items-center gap-2">
              <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-[#00B853]" />
              <span className="text-sm font-medium">Secure Payment</span>
            </span>
            <span className="flex items-center gap-2">
              <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-[#00B853]" />
              <span className="text-sm font-medium">24/7 Support</span>
            </span>
          </div>
        </section>

        {/* Right section - Login card */}
        <section className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-100 px-8 py-10 lg:px-10 lg:py-12 bg-white rounded-2xl shadow-md flex flex-col">
          <Link href="/" className="text-2xl font-bold text-[#00B853] mb-2">
            FreshCart
          </Link>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Sign in to continue your fresh shopping experience
          </p>

          <div className="flex gap-3 mb-5">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              <span className="text-red-500 font-bold text-lg">G</span>
              <span>Continue with Google</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              <span className="text-blue-600 font-bold text-lg">f</span>
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs uppercase tracking-wide text-gray-400">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-gray-600">
            New to FreshCart?{" "}
            <Link href="/register" className="font-medium text-[#00B853] hover:underline">
              Create an account
            </Link>
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 justify-center text-gray-600 text-xs">
            <span className="flex items-center gap-1.5">
              <IoLockClosedOutline className="h-4 w-4 text-gray-400" />
              SSL Secured
            </span>
            <span className="flex items-center gap-1.5">
              <IoPeopleOutline className="h-4 w-4 text-gray-400" />
              50K+ Users
            </span>
            <span className="flex items-center gap-1.5">
              <IoStarOutline className="h-4 w-4 text-gray-400" />
              4.9 Rating
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
