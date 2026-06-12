"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaShieldAlt, FaCheck, FaEye, FaEyeSlash } from 'react-icons/fa';
import { resetPasswordAction } from '../passwordReset/passwordReset.Actions';

type FormData = {
  password: string;
  rePassword: string;
};

export default function CreateNewPassword() {

  const router = useRouter()
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit , register } =  useForm<FormData>()
  
  async function MyhandleSubmit(value: FormData) {
    const email = sessionStorage.getItem('resetEmail')

    if (!email) {
      toast.error('Session expired. Please start the reset process again.')
      router.push('/ForgotPassword')
      return
    }

    if (value.password !== value.rePassword) {
      toast.error('Passwords do not match')
      return
    }

    setIsLoading(true)

    try {
      const result = await resetPasswordAction(value.password)

      if (result.success) {
        sessionStorage.removeItem('resetEmail')
        toast.success('Password reset successfully')
        router.push('/login')
      } else {
        toast.error(result.message || 'Failed to reset password')
        if (result.message?.includes('Session expired')) {
          router.push('/ForgotPassword')
        }
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }




  return (
    <section className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-10">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side (الجانب التعريفي الثابت من كودك) */}
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
            Secure Your Account
          </h2>

          <p className="text-center text-slate-600 text-xl max-w-2xl mt-5 leading-relaxed">
            Create a strong, unique password to complete your account recovery and keep your fresh choices safe.
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

        {/* Right Side (تعديل كامل ليطابق تصميم صفحة الباسورد الجديد بالظبط) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-[700px] w-full mx-auto">
          
          {/* Logo */}
          <h1 className="text-center text-5xl font-bold mb-8">
            <span className="text-green-600">Fresh</span>
            <span className="text-slate-900">Cart</span>
          </h1>

          <h2 className="text-center text-4xl font-bold text-slate-900">
            Create New Password
          </h2>

          <p className="text-center text-slate-500 mt-3 text-lg">
            Your new password must be different from previous passwords
          </p>

          {/* Steps (الـ Stepper المحدث: أول خطوتين مكتملتين، والأخيرة نشطة) */}
          <div className="flex items-center justify-center mt-10 mb-10">
            {/* خطوة 1: مكتملة */}
            <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center shadow-sm">
              <FaCheck className="text-white text-lg" />
            </div>

            <div className="w-20 h-[2px] bg-green-600"></div>

            {/* خطوة 2: مكتملة */}
            <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-green-100 flex items-center justify-center shadow-sm">
              <FaCheck className="text-white text-lg" />
            </div>

            <div className="w-20 h-[2px] bg-green-600"></div>

            {/* خطوة 3: الخطوة الحالية والنشطة (القفل) */}
            <div className="w-14 h-14 rounded-full bg-green-600 border-4 border-green-200 flex items-center justify-center shadow-md animate-pulse">
              <FaLock className="text-white text-lg" />
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6"   onSubmit={handleSubmit(MyhandleSubmit)}>
            
            {/* الحقل الأول: New Password */}
            <div>
              <label className="block text-slate-800 font-semibold mb-3">
                New Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter new password"
                  className="w-full h-16 rounded-2xl border border-slate-300 pl-14 pr-12 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-slate-400 text-lg"
                  { ...register("password") }
                />

                {/* زر إظهار/إخفاء كلمة المرور على اليمين */}
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showNewPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                </button>
              </div>
            </div>

            {/* الحقل الثاني: Confirm Password */}
            <div>
              <label className="block text-slate-800 font-semibold mb-3">
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm new password"
                  className="w-full h-16 rounded-2xl border border-slate-300 pl-14 pr-12 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-slate-400 text-lg"
                  { ...register("rePassword") }
                />

                {/* زر إظهار/إخفاء كلمة المرور على اليمين */}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showConfirmPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 cursor-pointer bg-green-600 hover:bg-green-700 transition-all text-white font-bold text-xl rounded-2xl shadow-lg mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
            
          </form>
          
        </div>
      </div>
    </section>
  );
}