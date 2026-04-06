"use client"

import { AddProductCard } from '_/app/Cart/CratActions'
import { useEffect, useMemo, useState } from 'react'
import {
  FaStar,
  FaRegStar,
  FaShoppingCart,
  FaBolt,
  FaHeart,
  FaShareAlt,
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
} from 'react-icons/fa'
// import { FidgetSpinner } from 'react-loader-spinner'
import { MdDone } from "react-icons/md";

type ProductDetailsClientProps = {
  product: any
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1)

  const images: string[] = useMemo(() => {
    const baseImages: string[] = []
    if (product?.imageCover) {
      baseImages.push(product.imageCover)
    }
    if (Array.isArray(product?.images)) {
      for (const img of product.images) {
        if (typeof img === 'string' && img && !baseImages.includes(img)) {
          baseImages.push(img)
        }
      }
    }
    return baseImages.length > 0 ? baseImages : [product?.imageCover].filter(Boolean)
  }, [product])

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  const activeImage = images[activeImageIndex] ?? images[0]

  useEffect(() => {
    // Trigger fade-in whenever the active image changes
    setImageLoaded(false)
  }, [activeImage])

  const stockAvailable = product?.quantity ?? 220
  const unitPrice = product?.priceAfterDiscount ?? product?.price ?? 0

  const totalPrice = useMemo(() => unitPrice * quantity, [unitPrice, quantity])

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => {
      const next = prev + 1
      return next > stockAvailable ? stockAvailable : next
    })
  }
  const [addcard, setaddcard] = useState(false)

  const  handleAddToCart = async () => {
    setaddcard(true)
    await AddProductCard(product.id)
    setaddcard(false) 
  }

  const handleBuyNow = () => {
    // TODO: integrate with checkout flow
  }

  return (
    <div className="grid gap-8 md:grid-cols-12">
      {/* Left: Images gallery */}
      <div className="md:col-span-5 flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center">
          {activeImage && (
            <img
              src={activeImage}
              alt={product?.title}
              onLoad={() => setImageLoaded(true)}
              className={`max-h-[420px] w-auto object-contain product-main-image ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
            {images.map((img, index) => {
              const isActive = index === activeImageIndex
              return (
                <button
                  key={img + index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative shrink-0 rounded-xl overflow-hidden bg-white ${
                    isActive
                      ? 'border-2 border-sky-500 shadow-sm'
                      : 'border border-slate-200 hover:border-sky-400'
                  } focus:outline-none focus:ring-2 focus:ring-sky-400`}
                >
                  <div className="h-20 w-20 sm:h-24 sm:w-24">
                    <img
                      src={img}
                      alt={product?.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Right: Details */}
      <div className="md:col-span-7 flex flex-col gap-6">
        {/* Category pills & title */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {product?.category?.name && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {product.category.name}
              </span>
            )}
            {product?.brand?.name && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {product.brand.name}
              </span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
            {product?.title}
          </h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center text-amber-400 text-sm">
              {[1, 2, 3, 4, 5].map((i) =>
                i <= Math.round(product?.ratingsAverage ?? 0) ? (
                  <FaStar key={i} />
                ) : (
                  <FaRegStar key={i} />
                ),
              )}
            </div>
            <span className="text-sm font-medium text-slate-900">
              {(product?.ratingsAverage ?? 0).toFixed(1)}
            </span>
            <span className="text-xs text-slate-500">
              ({product?.ratingsQuantity ?? 0} reviews)
            </span>
          </div>
        </div>

        {/* Price & stock & description */}
        <div className="space-y-3 border-y border-slate-100 py-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-2xl font-semibold text-slate-900">
              {unitPrice.toFixed(2)} EGP
            </p>
            {product?.priceAfterDiscount && (
              <p className="text-sm text-red-600 line-through">
                {product.price} EGP
              </p>
            )}
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              ● In Stock
            </span>
          </div>
          {product?.description && (
            <p className="text-sm text-slate-600 max-w-xl">
              {product.description}
            </p>
          )}
        </div>

        {/* Quantity & total price */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-900 mb-2">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="h-10 w-10 rounded-l-full text-lg font-semibold text-slate-700 hover:bg-slate-50"
                >
                  −
                </button>
                <span className="px-5 text-sm font-medium text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="h-10 w-10 rounded-r-full text-lg font-semibold text-slate-700 hover:bg-slate-50"
                >
                  +
                </button>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                {stockAvailable} available
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500 mb-1">Total Price:</p>
              <p className="text-xl font-semibold text-emerald-600">
                {totalPrice.toFixed(2)} EGP
              </p>
            </div>
          </div>
        </div>

        {/* Primary actions */}
        <div className="flex flex-col md:flex-row gap-3">
         { addcard ?  <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 inline-flex cursor-pointer items-center justify-center rounded-full bg-emerald-600  font-semibold text-white shadow-md hover:bg-emerald-700"
          >
            <MdDone
             />
          </button> : <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700"
          >
            <FaShoppingCart />
            Add to Cart
          </button>}
          <button
            type="button"
            onClick={handleBuyNow}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800"
          >
            <FaBolt />
            Buy Now
          </button>
        </div>

        {/* Wishlist & share */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="inline-flex  items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <FaHeart className="text-rose-500" />
            Add to Wishlist
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
          >
            <FaShareAlt />
          </button>
        </div>

        {/* Benefits strip */}
        <div className="mt-4 grid gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <FaTruck />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Free Delivery
              </p>
              <p className="text-[11px] text-slate-500">
                Orders over $50
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <FaUndoAlt />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                30 Days Return
              </p>
              <p className="text-[11px] text-slate-500">
                Money back guarantee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <FaShieldAlt />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Secure Payment
              </p>
              <p className="text-[11px] text-slate-500">
                100% protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

