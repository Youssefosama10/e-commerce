'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import { forgotPasswordAction } from '../passwordReset/passwordReset.Actions';
type FormData = {
  name: string;
  email: string;
};
export default function ForgotPassword() {

   const router =  useRouter()
   const [isLoading, setIsLoading] = useState(false)
    const { handleSubmit , register } =  useForm<FormData>()

    async function MyhandleSubmit(value : FormData)
    {
      const EmailName = value.email

      setIsLoading(true)

      try {
        const result = await forgotPasswordAction(EmailName)

        if (result.success) {
          sessionStorage.setItem('resetEmail', EmailName)

          setTimeout(() => {
            router.push('/CheckEmail')
          }, 2000);
        } else {
          toast.error(result.message || 'Failed to send reset code')
          setIsLoading(false)
        }
      } catch {
        toast.error('Something went wrong. Please try again.')
        setIsLoading(false)
      }
    }


  return (
    <section className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="relative w-full h-[430px] rounded-3xl bg-[#eef9f1] overflow-hidden shadow-md flex items-center justify-center">
            
            {/* Background Circles */}
            <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-green-100"></div>
            <div className="absolute top-24 right-24 w-20 h-20 rounded-full bg-green-100"></div>
            <div className="absolute bottom-14 right-16 w-36 h-36 rounded-full bg-green-100"></div>

            {/* Center Illustration */}
            <div className="relative flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center rotate-[-10deg]">
                <FaEnvelope className="text-green-500 text-2xl" />
              </div>

              <div className="w-32 h-32 bg-white rounded-[30px] shadow-xl flex items-center justify-center">
                <div className="w-24 h-24 bg-green-100 rounded-3xl flex items-center justify-center">
                  <FaLock className="text-green-600 text-4xl" />
                </div>
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center rotate-[10deg]">
                <FaShieldAlt className="text-green-500 text-2xl" />
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-28 flex gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-slate-900 mt-10">
            Reset Your Password
          </h2>

          <p className="text-center text-slate-600 text-xl max-w-2xl mt-5 leading-relaxed">
            Don't worry, it happens to the best of us. We'll help you get back
            into your account in no time.
          </p>

          <div className="flex items-center gap-10 mt-8 text-slate-600">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <span>Email Verification</span>
            </div>

            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-600" />
              <span>Secure Reset</span>
            </div>

            <div className="flex items-center gap-2">
              <FaLock className="text-green-600" />
              <span>Encrypted</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-[700px] w-full mx-auto">
          
          {/* Logo */}
          <h1 className="text-center text-5xl font-bold mb-8">
            <span className="text-green-600">Fresh</span>
            <span className="text-slate-900">Cart</span>
          </h1>

          <h2 className="text-center text-4xl font-bold text-slate-900">
            Forgot Password?
          </h2>

          <p className="text-center text-slate-500 mt-3 text-lg">
            No worries, we'll send you a reset code
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center mt-10 mb-10">
            <div className="w-14 h-14 rounded-full animate-pulse bg-green-600 border-4 border-green-100 flex items-center justify-center">
              <FaEnvelope className="text-white " />
            </div>

            <div className="w-20 h-[2px] bg-slate-200"></div>

            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
              <FaLock className="text-slate-400" />
            </div>

            <div className="w-20 h-[2px] bg-slate-200"></div>

            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
              <FaLock className="text-slate-400" />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit(MyhandleSubmit)}>
         <div>
            <label className="block text-slate-800 font-semibold mb-3">
              Email Address
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-16 rounded-2xl border border-slate-300 pl-14 pr-4 outline-none focus:ring-2 focus:ring-green-500"
                { ...register("email") }
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-16 cursor-pointer bg-green-600 hover:bg-green-700 transition-all text-white font-bold text-xl rounded-2xl shadow-lg mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Reset Code'}
          </button>
         </form>

          {/* Button */}

          {/* Back */}
          <button className="flex items-center justify-center gap-2 text-green-600 font-medium mx-auto mt-8">
            <FaArrowLeft />
            Back to Sign In
          </button>

          <div className="border-t mt-10 pt-8 text-center text-slate-600">
            Remember your password?{' '}
            <span className="text-green-600 font-semibold cursor-pointer">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}