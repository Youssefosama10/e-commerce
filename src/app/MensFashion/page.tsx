import Header from '_/components/Header/Header'
import React from 'react'
import ProductCard from '../ProductCard/page'
import { GetAllProducts } from '_/API/route.services'
import { ProductType } from '_/API/types'

export default async function MensFashion() {
  const AllProducts = await GetAllProducts()
  return (

<>


<Header title="Electronics" desc="Browse products in Electronics" color="bg-green-500" />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 container mx-auto px-4 py-10">
  {AllProducts?.slice(20, 30).map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
</>


  ) 
}
