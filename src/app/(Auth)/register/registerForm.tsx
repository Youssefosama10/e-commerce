"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoPersonSharp } from 'react-icons/io5'
import { FidgetSpinner } from 'react-loader-spinner'
import { RegisterObjectType } from './register.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from './Register.schemas'
// import { RegisterActions } from './login.Actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { RegisterActions } from './Register.Actions'
export default function RegisterForm() {
  
  const router = useRouter()
  const [isLoading, setIsLoading ] = useState(false)

   const { handleSubmit , register , formState  } = useForm<RegisterObjectType>(
    {
      resolver : zodResolver(RegisterSchema)
    }
   )


   async function MyhandleSubmit(data : RegisterObjectType )
    {
      // console.log('data' , data);
      setIsLoading(true)
    const isRegisteredSuccesfuly = await RegisterActions(data)

    if ( isRegisteredSuccesfuly )
    {
      toast.success("Account created Succesfuly")
      router.push("/login")
    }
      else
      {
        toast.error("Account Already exist")
      } 

      setIsLoading(false)


    } 



  return (
    <div>
             <form onSubmit={handleSubmit(MyhandleSubmit)}  className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B853]/60 focus:border-transparent"
                placeholder="Ali"
                { ...register('name') }
              />
              { formState.errors.name && formState.touchedFields.name && <p className="text-red-500">{formState.errors.name.message}</p> }
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B853]/60 focus:border-transparent"
                placeholder="ali@example.com"
                { ...register('email') }
              />
              { formState.errors.email && formState.touchedFields.email && <p className="text-red-500">{formState.errors.email.message}</p> }
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B853]/60 focus:border-transparent"
                placeholder="create a strong password"
                { ...register('password')  }
              />
              { formState.errors.password && formState.touchedFields.password && <p className="text-red-500">{formState.errors.password.message}</p> }
              <div className="mt-1 flex items-center justify-between text-xs">
                <p className="text-gray-500">
                  Must be at least 8 characters with numbers and symbols
                </p>
                <span className="text-gray-400">Weak</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B853]/60 focus:border-transparent"
                placeholder="confirm your password"
                { ...register('rePassword') }
              />
              { formState.errors.rePassword && formState.touchedFields.rePassword && <p className="text-red-500">{formState.errors.rePassword.message}</p> }
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B853]/60 focus:border-transparent"
                placeholder="+1 234 567 8900"
                { ...register('phone') }
              />
              { formState.errors.phone && formState.touchedFields.phone && <p className="text-red-500">{formState.errors.phone.message}</p> }
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#00B853] focus:ring-[#00B853]/40"
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-600 leading-snug"
              >
                I agree to the{" "}
                <a href="#" className="text-[#00B853] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#00B853] hover:underline">
                  Privacy Policy
                </a>
                <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              aria-disabled={isLoading}
              className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white shadow-md transition ${
                isLoading
                  ? 'bg-[#00B853]/70 cursor-not-allowed'
                  : 'bg-[#00B853] hover:bg-[#00a148] cursor-pointer'
              }`}
            >
              {isLoading ? (
                <>
                  <span className="flex items-center justify-center rounded-full">
                    <FidgetSpinner
                      visible={true}
                      height={30}
                      width={30}
                      ariaLabel="fidget-spinner-loading"
                      wrapperStyle={{}}
                      wrapperClass="fidget-spinner-wrapper"
                    />
                  </span>
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full">
                    <IoPersonSharp />
                  </span>
                  <span>Create My Account</span>
                </>
              )}
            </button>
          </form>
    </div>
  )
}
