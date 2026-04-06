"use client"

import { useSession } from "next-auth/react"

export default function Button() {
  const session =  useSession()
   const isUserauthenticated = session.status === "authenticated"

  return ( 
    <>
    { isUserauthenticated ?   <button className="w-full bg-green-600 text-white  py-2 rounded-2xl mt-4 cursor-pointer">
      Secure Checkout
              </button>  :  <button className="w-full bg-green-600 text-white  py-2 rounded-2xl mt-4 cursor-pointer">
                Login to Checkout
              </button>   }
    
    </>
  )
}
