'use client'
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { createCashOrder, createOnlienOrder } from "../CratActions";
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useCart } from "_/app/_Context/cardtContext";
import { GetUserCart } from "_/API/route.services";

export default function page(Data : string) {

 const Inputdetails = useRef< HTMLInputElement >(null)
 const Inputphone = useRef< HTMLInputElement >(null)
 const Inputcity = useRef< HTMLInputElement >(null)
 const InputpostalCode = useRef< HTMLInputElement >(null)

  const { id } = useParams()
 const { setItemCart   } = useCart()

 

 const router = useRouter()

   async function handleCashOreder()
    {

      const obj  = {
        shippingAddress : {
          details : Inputdetails.current?.value || '' , 
          phone : Inputphone.current?.value || '' ,
          city : Inputcity.current?.value || '' ,
          postalCode : InputpostalCode.current?.value || ''
        }
      }

    const created =  await createCashOrder( id?.toString() || '' , obj )

    if( created )
    {
      toast.success("Order created successfully")
      setItemCart(0)
      router.push('/')
    }
    else
    {
      toast.error("Error IN Order")
    }

    }

    async function handleChecout()
    {
      const obj  = {
        shippingAddress : {
          details : Inputdetails.current?.value || '' , 
          phone : Inputphone.current?.value || '' ,
          city : Inputcity.current?.value || '' ,
          postalCode : InputpostalCode.current?.value || ''
        }
      }


    const link = await createOnlienOrder(id?.toString() || '' , obj )

    if(link === false  )
    {

    }
    else 
    {
      window.open(link , '_self')
    }

    }

  return (
    <>
    <div className="bg-gray-100 min-h-screen p-6">
      
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Home / Cart / Checkout</p>

        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-green-600 text-white p-2 rounded">
                🧾 
              </span>
              Complete Your Order
            </h1>
            <p className="text-gray-500 text-sm">
              Review your items and complete your purchase
            </p>
          </div>

          <button className="text-green-600 flex items-center gap-2 cursor-pointer">
            <FaArrowLeft /> Back to Cart
          </button>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-8 space-y-6">

          {/* Shipping */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-green-700 text-white p-4 font-semibold">
              Shipping Address 
            </div>

            <div className="p-4 space-y-4">

              <div className="bg-blue-50 text-blue-600 p-3 rounded text-sm">
                Delivery Information <br />
                <span className="text-xs text-blue-400">
                  Please ensure your address is accurate for smooth delivery
                </span>
              </div>
              <label className="text-green-600" htmlFor="">City *</label>
              <input
              ref={Inputcity}
                type="text"
                placeholder="eg. Cairo, Alexandria, Giza"
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />


              <label className="text-green-600" htmlFor="">Street Address</label>
              <textarea
                placeholder="Street name, building number, floor..."
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />
              <label className="text-green-600" htmlFor="">Phone Number *</label>
              <input
              ref={Inputphone}
                type="text"
                placeholder="01xxxxxxxxx"
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />
            
            </div>
            <div className="flex mb-3 justify-center items-center"> 
            <button onClick={handleChecout} className="w-75 m-auto bg-green-600 text-white  py-2 rounded-2xl mt-4 cursor-pointer">Create Online order</button>
            <button onClick={handleCashOreder} className="w-75 m-auto bg-green-600 text-white  py-2 rounded-2xl mt-4 cursor-pointer">Create Cash order</button>
              
            </div>
          </div>

          {/* Payment */}
          {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-green-700 text-white p-4 font-semibold">
              Payment Method
            </div> */}

            <div className="p-4 space-y-4">

              {/* Cash */}
              {/* <div className="border-2 border-green-500 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">Cash on Delivery</p>
                  <p className="text-sm text-gray-500">
                    Pay when your order arrives
                  </p>
                </div>
                <FaCheckCircle className="text-green-600" />
              </div> */}

              {/* Online */}
              {/* <div className="border p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-semibold">Pay Online</p>
                  <p className="text-sm text-gray-500">
                    Secure payment with card
                  </p>
                </div>
                <div className="w-4 h-4 border rounded-full"></div>
              </div> */}

              {/* <div className="bg-green-50 text-green-600 p-3 rounded text-sm">
                Secure & Encrypted – Your payment info is protected
              </div> */}

            </div>
          </div>
        </div>

        {/* RIGHT */}
        {/* <div className="col-span-12 lg:col-span-4"> */}
          {/* <div className="sticky top-4 bg-white rounded-xl shadow-sm overflow-hidden"> */}

            {/* <div className="bg-green-700 text-white p-4 font-semibold">
              Order Summary
            </div> */}

            {/* <div className="p-4 space-y-3"> */}

              {/* Items */}
              {/* <div className="space-y-2 max-h-40 overflow-y-auto">
                <div className="flex justify-between text-sm">
                  <span>Woman Shawl</span>
                  <span>298 EGP</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Laptop</span>
                  <span>42,960 EGP</span>
      
                 
                </div>

                <div className="flex justify-between text-sm">
                  <span>Essentials</span>
                  <span>1,079 EGP</span>
                </div>
              </div>

              <hr />

              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span>44,337 EGP</span>
              </div>

              <div className="flex justify-between text-gray-600 text-sm">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-green-600">44,337 EGP</span>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-3 hover:bg-green-700 transition">
                Place Order
              </button>

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>✔ Secure</span>
                <span>✔ Fast Delivery</span>
                <span>✔ Easy Returns</span>
              </div> */}

            </div>
          {/* </div> */}
        {/* </div> */}

      {/* </div> */}
    {/* </div> */}
    
    </>
  )
}
