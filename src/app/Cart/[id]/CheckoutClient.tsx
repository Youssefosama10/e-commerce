'use client'
import { FaArrowLeft, FaCheckCircle, FaShieldAlt, FaShoppingBag } from "react-icons/fa"
import { createCashOrder, createOnlienOrder } from "../CratActions"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import { useCart } from "_/app/_Context/cardtContext"
import Link from "next/link"
import { MdReceipt } from "react-icons/md"
import { ItemType } from "_/API/types"
import { Banknote, CreditCard, ShieldCheck, Wallet } from "lucide-react"
import Caption from "_/components/caption/Caption"
import { HiArchiveBox } from "react-icons/hi2";
import { FaTruck, FaTruckFast } from "react-icons/fa6"

type PaymentMethod = 'cash' | 'online'

interface CheckoutClientProps {
  cartId: string
  products: ItemType[]
  totalCartPrice: number
}

export default function CheckoutClient({
  cartId,
  products,
  totalCartPrice,
}: CheckoutClientProps) {
  const Inputdetails = useRef<HTMLTextAreaElement>(null)
  const Inputphone = useRef<HTMLInputElement>(null)
  const Inputcity = useRef<HTMLInputElement>(null)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash')
  const { setItemCart } = useCart()
  const router = useRouter()

  async function handleCashOreder() {
    const obj = {
      shippingAddress: {
        details: Inputdetails.current?.value || '',
        phone: Inputphone.current?.value || '',
        city: Inputcity.current?.value || '',
        postalCode: '',
      },
    }

    const created = await createCashOrder(cartId, obj)

    if (created) {
      toast.success("Order created successfully")
      setItemCart(0)
      router.push('/')
    } else {
      toast.error("Error IN Order")
    }
  }

  async function handleChecout() {
    const obj = {
      shippingAddress: {
        details: Inputdetails.current?.value || '',
        phone: Inputphone.current?.value || '',
        city: Inputcity.current?.value || '',
        postalCode: '',
      },
    }

    const link = await createOnlienOrder(cartId, obj)

    if (link !== false) {
      window.open(link, '_self')
    }
  }

  function handlePlaceOrder() {
    if (paymentMethod === 'cash') {
      handleCashOreder()
    } else {
      handleChecout()
    }
  }

  return (
<>


<div className="bg-gray-100 min-h-screen p-6">
      <div className="mb-6">
        <p className="text-sm text-gray-500">Home / Cart / Checkout</p>

        <div className="flex justify-between items-center mt-2">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-green-600 text-white p-2 rounded">
                <MdReceipt />
              </span>
              Complete Your Order
            </h1>
            <p className="text-gray-500 text-sm">
              Review your items and complete your purchase
            </p>
          </div>

          <Link href="/Cart">
            <button className="text-green-600 flex items-center gap-2 cursor-pointer">
              <FaArrowLeft /> Back to Cart
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-green-700 text-white p-4 font-semibold">
              Shipping Address <br />
              <p className="text-white/70"> Where should we deliver your order?</p>
            </div>

            <div className="p-4 space-y-4">
              <div className="bg-blue-50 text-blue-600 p-3 rounded text-sm">
                Delivery Information <br />
                <span className="text-xs text-blue-400">
                  Please ensure your address is accurate for smooth delivery
                </span>
              </div>
              <label className="text-green-600" htmlFor="city">City *</label>
              <input
                id="city"
                ref={Inputcity}
                type="text"
                placeholder="eg. Cairo, Alexandria, Giza"
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />

              <label className="text-green-600" htmlFor="details">Street Address</label>
              <textarea
                id="details"
                ref={Inputdetails}
                placeholder="Street name, building number, floor..."
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />
              <label className="text-green-600" htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                ref={Inputphone}
                type="text"
                placeholder="01xxxxxxxxx"
                className="w-full mt-2 border rounded-lg p-2 outline-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-green-600 text-white p-4 flex items-start gap-3">
              <Wallet className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold">Payment Method</p>
                <p className="text-white/80 text-sm">Choose how you&apos;d like to pay</p>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`w-full flex items-center justify-between gap-4 rounded-xl p-4 md:p-5 text-left transition-all duration-200 cursor-pointer ${
                  paymentMethod === 'cash'
                    ? 'border-2 border-green-500 bg-green-50'
                    : 'border border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/30'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                      paymentMethod === 'cash' ? 'bg-green-600' : 'bg-gray-100'
                    }`}
                  >
                    <Banknote
                      className={`w-6 h-6 ${paymentMethod === 'cash' ? 'text-white' : 'text-gray-500'}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-semibold ${
                        paymentMethod === 'cash' ? 'text-green-700' : 'text-slate-800'
                      }`}
                    >
                      Cash on Delivery
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Pay when your order arrives at your doorstep
                    </p>
                  </div>
                </div>
                {paymentMethod === 'cash' ? (
                  <FaCheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full shrink-0" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('online')}
                className={`w-full flex items-center justify-between gap-4 rounded-xl p-4 md:p-5 text-left transition-all duration-200 cursor-pointer ${
                  paymentMethod === 'online'
                    ? 'border-2 border-green-500 bg-green-50'
                    : 'border border-gray-200 bg-white hover:border-green-300 hover:bg-green-50/30'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      paymentMethod === 'online' ? 'bg-green-600 shadow-sm' : 'bg-gray-100'
                    }`}
                  >
                    <CreditCard
                      className={`w-6 h-6 ${paymentMethod === 'online' ? 'text-white' : 'text-gray-500'}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`font-semibold ${
                        paymentMethod === 'online' ? 'text-green-700' : 'text-slate-800'
                      }`}
                    >
                      Pay Online
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Secure payment with Credit/Debit Card via Stripe
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-900 text-white">
                        VISA
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-600 text-white">
                        MC
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-700 text-white">
                        AMEX
                      </span>
                    </div>
                  </div>
                </div>
                {paymentMethod === 'online' ? (
                  <FaCheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full shrink-0" />
                )}
              </button>
    
              <div className="bg-green-50 rounded-xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <FaShieldAlt className="text-green-600 text-sm" />
                </div>
                <div>
                  <p className="font-semibold text-green-700 text-sm">Secure & Encrypted</p>
                  <p className="text-xs text-green-600/80 mt-0.5">
                    Your payment info is protected with 256-bit SSL encryption
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-green-600 cursor-pointer hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                
                Place Order
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-4 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-green-700 text-white p-4 font-semibold">
              <div className="flex items-center gap-2">
            <FaShoppingBag /> 
            Order Summary <br />
              </div>

              <span className="text-white/70 ">items: {products.length}</span>
            </div>

            <div className="p-4 space-y-3">
              <div className="space-y-3 max-h-60   overflow-y-auto">
                {products.map((item) => (
                  <div key={item._id} className="flex items-center bg-[#F3F4F6] p-3 rounded-2xl justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-14 h-14 rounded object-cover shrink-0"
                      />
                      <span className="text-sm font-medium truncate"> {item.product.title.split(" ").slice(0, 2).join(" ")}</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600 shrink-0">
                      {item.price} EGP
                    </span>
                  </div>
                ))}
              </div>

              <hr />

              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span>{totalCartPrice} EGP</span>
              </div>

              <div className="flex justify-between text-gray-600 text-sm">
                <div className=" flex items-center ">
                <FaTruck className=" mr-1.5" />
                <span>  Shipping</span>
                </div>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-green-600">{totalCartPrice} EGP</span>
              </div>

              <div className="mt-3  flex items-center justify-between border-t border-gray-200 pt-3">
  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
    <FaShieldAlt className="text-green-500 text-sm" />
    <span>Secure</span>
  </div>

  <div className="h-5 w-px bg-gray-200" />

  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
    <FaTruckFast className="text-blue-500 text-sm" />
    <span>Fast Delivery</span>
  </div>

  <div className="h-5 w-px bg-gray-200" />

  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
    <HiArchiveBox  className="text-orange-500 text-sm" />
    <span>Easy Returns</span>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
              <Caption/>

</>
    
  )

}
