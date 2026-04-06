"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoPersonSharp } from 'react-icons/io5'
import { FidgetSpinner } from 'react-loader-spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from './Register.schemas'
// import { RegisterActions } from './login.Actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { LoginActions } from './Register.Actions'
import { LoginObjectType } from './register.types'
import { signIn } from 'next-auth/react'



export default function LoginForm() {
  
  const router = useRouter()
  const [isLoading, setIsLoading ] = useState(false)

   const { handleSubmit , register , formState  } = useForm<LoginObjectType>(
    {
      resolver : zodResolver(LoginSchema)
    }
   )


   async function MyhandleSubmit(data : LoginObjectType )
   {
      setIsLoading(true)
     const result = await signIn('credentials' , { redirect : false , ...data })

    if(result?.ok)
      {
          toast.success("logged in Succesfuly")
          router.push("/")
      }   
      else
      {
      toast.error("error")
      } 


      setIsLoading(false)


    } 



  return (
    <div>
             <form onSubmit={handleSubmit(MyhandleSubmit)}  className="space-y-4">
        

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
                  
                </>
              ) : (
                <>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full">
                    <IoPersonSharp />
                  </span>
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
    </div>
  )
}
