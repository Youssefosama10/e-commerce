
import img1 from '@images/images2 (1).png'
import RegisterForm from './registerForm'


import * as zod from 'zod'
import Link from 'next/link'


export default function RegisterPage() {

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left info panel */}
        <section className="w-full lg:w-1/2 px-8 py-10 lg:px-10 lg:py-12 bg-white">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Welcome to{" "}
            <span className="text-[#00B853] font-bold">FreshCart</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F7ED] text-[#00B853] text-xl font-semibold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-600">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F7ED] text-[#00B853] text-xl font-semibold">
                ⏱
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">
                  Same-day delivery available in most areas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F7ED] text-[#00B853] text-xl font-semibold">
                🔒
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Secure Shopping
                </h3>
                <p className="text-sm text-gray-600">
                  Your data and payments are completely secure.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto rounded-xl border border-gray-100 bg-gray-50 px-6 py-5 shadow-sm max-w-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFEAD5] text-lg font-semibold text-orange-700">
                <img src={img1.src} alt="" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              &quot;FreshCart has transformed my shopping experience. The
              quality of the products is outstanding, and the delivery is
              always on time. Highly recommend!&quot;
            </p>
          </div>
        </section>

        {/* Right form panel */}
        <section className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-100 px-8 py-10 lg:px-10 lg:py-12 bg-white">
          <h2 className="text-2xl text-center md:text-3xl font-semibold text-gray-900 mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Start your fresh journey with us today
          </p>

          <div className="flex gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <span className="text-red-500 text-lg">G</span>
              <span>Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              <span className="text-blue-600 text-lg">f</span>
              <span>Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs uppercase tracking-wide text-gray-400">
              or
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

   <RegisterForm/>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#00B853] font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
