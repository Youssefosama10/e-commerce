// 'use client'
import { GetUserCart } from '_/API/route.services'
import { CartResponse } from '_/API/types'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "_/components/ui/table"
import Link from 'next/link'
import { FaCartShopping, FaMinus, FaPlus, FaTrash, FaTrashCan } from 'react-icons/fa6'
import img1 from '_/assets/images/images2 (1).png'
import { FaShoppingCart } from 'react-icons/fa'
import RemoveProduct from './RemoveProduct'
import UpDateproduct from './upDateproduct'
import Button from './button'

export default async function Cart() {

  const userCrat  = await GetUserCart()

  const { totalCartPrice , products , _id } = (userCrat as CartResponse)

  

  return (
    <>
    
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
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
        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          
          {/* ITEM 1 */}
          {products.map((product) => (
 <div className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
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

     {/* counter */}
     <div className="flex items-center gap-2 mt-2">
     <UpDateproduct isIncrement count={product.count - 1 } id={product.product.id}  />
       <span className='p-0.5'>{product.count}</span>
      <UpDateproduct  count={product.count + 1} id={product.product.id}/>
     </div>
   </div>
 </div>

 <div className="text-right">
   <p className="text-sm text-gray-500">Total</p>
   <p className="font-bold">{product.price} EGP</p>
  <RemoveProduct id = {product.product.id}/>
 </div>
</div>
))}


     
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-12  lg:col-span-4">
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

             {/* <Button/> */}
             <Link href={`/Cart/${_id}`}>
             <button className="w-full bg-green-600 text-white  py-2 rounded-2xl  cursor-pointer">
             Checkout
             </button>
             </Link>

            

              <ul className="text-sm text-gray-500 mt-3 space-y-1">
                <li>✔ Your cart items will be saved</li>
                <li>✔ Track your orders easily</li>
                <li>✔ Access exclusive member deals</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}
