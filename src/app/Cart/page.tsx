import { GetUserCart } from '_/API/route.services'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { Package } from 'lucide-react'
import RemoveProduct from './RemoveProduct'
import UpDateproduct from './upDateproduct'

const popularCategories = [
  { label: 'Electronics', href: '/Electronics' },
  { label: 'Fashion', href: '/WomensFashion' },
  { label: 'Home', href: '/shop' },
  { label: 'Beauty', href: '/Beauty&Health' },
]

export default async function Cart() {
  const userCart = await GetUserCart()
  const isEmpty = !userCart || userCart.products.length === 0

  if (isEmpty) {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500">Home / Shopping Cart</p>
          <h1 className="text-2xl font-bold flex items-center gap-2 mt-2">
            <span className="bg-green-500 text-white p-2 rounded">
              <FaShoppingCart />
            </span>
            Shopping Cart
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center py-24 gap-5">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <Package className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
          </div>

          <h2 className="text-2xl font-bold text-slate-800">Your cart is empty</h2>

          <p className="text-slate-400 text-sm text-center max-w-xs leading-relaxed">
            Looks like you haven&apos;t added anything to your cart yet.
            <br />
            Start exploring our products!
          </p>

          <Link
            href="/"
            className="mt-2 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold px-10 py-3 rounded-full flex items-center gap-2"
          >
            Start Shopping <span>→</span>
          </Link>

          <div className="w-full max-w-md border-t border-gray-200 mt-6 pt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">Popular Categories</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularCategories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  className="bg-gray-100 text-slate-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { totalCartPrice, products, _id } = userCart

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="mb-6">
        <p className="text-sm text-gray-500">Home / Shopping Cart</p>
        <h1 className="text-2xl font-bold flex items-center gap-2 mt-2">
          <span className="bg-green-500 text-white p-2 rounded">
            <FaShoppingCart />
          </span>
          Shopping Cart
        </h1>
        <p className="text-gray-600 mt-1">
          You have <span className="text-green-600 font-semibold">{products.length} items</span> in your cart
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {products.map((product) => (
            <div key={product.product.id} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex gap-4">
                <img
                  src={product.product.imageCover}
                  className="w-20 h-20 rounded"
                  alt={product.product.title}
                />
                <div>
                  <h2 className="font-semibold">{product.product.title}</h2>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    {product.product.category.name}
                  </span>
                  <p className="text-green-600 font-bold mt-2">{product.price} EGP</p>

                  <div className="flex items-center gap-2 mt-2">
                    <UpDateproduct isIncrement count={product.count - 1} id={product.product.id} />
                    <span className="p-0.5">{product.count}</span>
                    <UpDateproduct count={product.count + 1} id={product.product.id} />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-bold">{product.price} EGP</p>
                <RemoveProduct id={product.product.id} />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-xl sticky top-4 shadow-sm overflow-hidden">
            <div className="bg-gray-900 text-white p-4 font-semibold">
              Order Summary
            </div>

            <div className="p-4 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{totalCartPrice} EGP</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Calculated at checkout</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold">
                <span>Estimated Total</span>
                <span className="text-green-600">{totalCartPrice}GP</span>
              </div>

              <Link href={`/Cart/${_id}`}>
                <button className="w-full bg-green-600 text-white py-2 rounded-2xl cursor-pointer">
                  Checkout
                </button>
              </Link>

              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" /> Your cart items will be saved
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" />
                  Track your orders easily
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-green-600" />
                  Access exclusive member deals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
