'use client'
import { FaHeart, FaPlus, FaRegEye, FaRegStar, FaStar } from "react-icons/fa6";
import { ProductCardProps } from "./ProductCard.types";
import { FaRedoAlt } from "react-icons/fa";
import Link from "next/link";
import { AddProductCard } from "../Cart/CratActions";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { useCart, useWishlist } from "../_Context/cardtContext";
import { toast } from "react-toastify";
import { AddProductwishlist } from "../wishlist/wishlistActions";

export default function ProductCard( {product}: ProductCardProps ) {
 const { setwishlist } = useWishlist()
 const { setItemCart} = useCart()
 
  const [addcard, setaddcard] = useState(false)

  async  function handleAddCard()
    {  
      setaddcard(true)
      const newItem =  await AddProductCard(product.id)
      if(newItem != false)
      {
        toast.success("Product added successfully to your cart")
        setItemCart(newItem)
      }
      else
      {
        toast.error("Product addition failed")
      }

       setaddcard(false)      
    }

    

    async function addCard()
    {
      const newCount = await AddProductwishlist(product.id)
       
      if(newCount !== false)
      {
        setwishlist(newCount) 
        toast.success("The product has been added to wishlist")
      }
      else
      {
        toast.error("Product addition failed")
      }

  }

  return (
    <>
    
    <div
          
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between min-h-[320px] relative"
          >
            
            
            {/* Image + side action icons */}
            <div className="relative flex justify-center items-start mb-4">

            {product.priceAfterDiscount && (
  <div className="absolute left-0 top-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
    -
    {Math.round(
      ((product.price - product.priceAfterDiscount) / product.price) * 100
    )}
    %
  </div>
)}
              <img
                src={product.imageCover}
                alt={product.title}
                className="h-55 object-contain"
              />
              <div className="absolute right-0 top-0 flex flex-col space-y-2">
                <button
                onClick={addCard}
                  type="button"
                  className="w-9 h-9 rounded-full cursor-pointer bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#009966]"
                >
                  <FaHeart />
                </button>
                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#009966]"
                >
                  <FaRedoAlt />
                </button>
               <Link href={`/products/${product.id}`}>
               <button
                  type="button"
                  className="w-9 h-9 rounded-full cursor-pointer bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#009966]"
                >
       
                <FaRegEye />
                </button>
               
               </Link>
              </div>
            </div>

            {/* Text content */}
            <div>
              <p className="text-xs text-gray-400 font-medium">
                {product.category.name}
              </p>
              <h3 className="mt-1 text-lg  text-gray-900 line-clamp-2">
                {product.title}
              </h3>

              {/* Rating row */}
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex items-center text-[#FDC700] text-sm">
                  {[1, 2, 3, 4, 5].map((i) =>
                    i <= Math.round(product.ratingsAverage) ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>
                <span className="text-xs text-gray-500">
                  {product.ratingsAverage.toFixed(1)} ({product.ratingsQuantity})
                </span>
              </div>

              {/* Price + add button */}
              <div className="mt-4 flex items-center">
                <span className="text-lg font-bold text-gray-900">
                  {product.priceAfterDiscount ? product.priceAfterDiscount : product.price} EGP
                </span>
                {product.priceAfterDiscount && (
                  <span className="text-red-600 line-through m-2">
                    {product.price} EGP
                  </span>
                )}
        <div className="ml-auto">
       { addcard ?  <button
                  
                  type="button"
                  className="w-9 h-9 cursor-pointer rounded-full bg-[#009966] text-white flex items-center justify-center shadow-md"
                >
                  <MdDone size={20} />
                </button>: <button
                  onClick={handleAddCard}
                  type="button"
                  className="w-9 h-9 cursor-pointer rounded-full bg-[#009966] text-white flex items-center justify-center shadow-md"
                >
                  <FaPlus />
                </button>}
        </div>
              </div>
            </div>
          </div>
    </>
  )
}
