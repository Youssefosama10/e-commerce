import { GetProductDetails } from '_/API/route.services'

import React from 'react'
import ProductDetailsClient from './ProductDetailsClient'

export default async function productDetails( { params } : { params: Promise< {id: string} > } ) {
  const productId = (await params).id
  const productDetails = await GetProductDetails(productId)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ProductDetailsClient product={productDetails} />
    </div>
  )
}
