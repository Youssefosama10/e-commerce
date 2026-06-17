
'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaShieldAlt, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa6';
import { verifyResetCodeAction } from '../passwordReset/passwordReset.Actions';
import Link from 'next/link';
type FormData = {
  code: string;
};




export default function VerificationPage() {

  const router =  useRouter()
  const [resetEmail, setResetEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setResetEmail(sessionStorage.getItem('resetEmail') ?? '')
  }, [])

  const { handleSubmit , register } =  useForm<FormData>()

  async function MyhandleSubmit(value : FormData)
  {
    const Code = value.code

    setIsLoading(true)

    try {
      const result = await verifyResetCodeAction(Code)

      if (result.success) {
        setTimeout(() => {
          router.push('/NewPassword')
        }, 2000);
      } else {
        toast.error(result.message || 'Invalid verification code')
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
        
        {/* Left Side (أنتيميشن وجانب تعريفي مقتبس من كودك) */}
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
                  <FaKey className="text-green-600 text-4xl" /> {/* تم تغييرها لـ مفتاح لتناسب التحقق */}
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
            Verify Your Account
          </h2>

          <p className="text-center text-slate-600 text-xl max-w-2xl mt-5 leading-relaxed">
            We want to make sure it's really you. Enter the verification code sent to your inbox to secure your account.
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

        {/* Right Side (تعديل كامل ليطابق تصميم الصورة بالظبط) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-[700px] w-full mx-auto">
          
          {/* Logo */}
          <h1 className="text-center text-5xl font-bold mb-8">
            <span className="text-green-600">Fresh</span>
            <span className="text-slate-900">Cart</span>
          </h1>

          <h2 className="text-center text-4xl font-bold text-slate-900">
            Check Your Email
          </h2>

          <p className="text-center text-slate-500 mt-4 text-lg">
            Enter the 6-digit code sent to <span className="font-semibold text-slate-700">{resetEmail || 'your email'}</span>
          </p>

          {/* Steps (الـ Stepper المحدث ليطابق الأيقونات والألوان بالصورة) */}
          <div className="flex items-center justify-center mt-10 mb-10">
            {/* خطوة 1: تم بنجاح */}
            <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center shadow-sm">
              <FaCheck className="text-white text-lg" />
            </div>

            <div className="w-20 h-[2px] bg-green-500"></div>

            {/* خطوة 2: الخطوة الحالية (المفتاح/الكود) */}
            <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-green-200 flex items-center justify-center shadow-md animate-pulse">
              <FaKey className="text-white text-lg" />
            </div>

            <div className="w-20 h-[2px] bg-slate-200"></div>

            {/* خطوة 3: القفل المغلق */}
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
              <FaLock className="text-slate-400 text-lg" />
            </div>
          </div>

          {/* Form */}
          
          <form onSubmit={handleSubmit(MyhandleSubmit)}>
            <div>
              <label className="block text-slate-800 font-semibold mb-3">
                Verification Code
              </label>

              <div className="relative">
                {/* أيقونة الدرع الأمني الموجودة يسار الـ Input بالصورة */}
                <FaShieldAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

                <input
                  type="text"
                  maxLength={6}
                  placeholder="•  •  •  •  •  •"
                  className="w-full h-16 rounded-2xl border border-slate-300 pl-14 pr-4 text-center text-2xl tracking-[0.5em] font-bold outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-slate-300 placeholder:tracking-normal"
                  { ...register("code") }
                />
              </div>
            </div>

            {/* Resend Code Option */}
            <p className="text-center text-slate-500 mt-5 text-base">
              Didn't receive the code?{' '}
              <button type="button" className="text-green-600 font-semibold hover:underline cursor-pointer">
                Resend Code
              </button>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 cursor-pointer bg-green-600 hover:bg-green-700 transition-all text-white font-bold text-xl rounded-2xl shadow-lg mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>

          {/* Change Email Address Link */}
      <Link href='/ForgotPassword'>
      
      <button type="button" className="flex items-center cursor-pointer justify-center gap-2 text-slate-500 font-medium mx-auto mt-8 hover:text-slate-800 transition-colors">
            <FaArrowLeft className="text-sm" />
            Change email address
          </button>
      </Link>
          
        </div>
      </div>
    </section>
  );
}