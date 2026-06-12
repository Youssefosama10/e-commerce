import { GetUserCart } from "_/API/route.services"
import { redirect } from "next/navigation"
import CheckoutClient from "./CheckoutClient"

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const userCart = await GetUserCart()

  if (!userCart || userCart.products.length === 0) {
    redirect('/Cart')
  }

  const { totalCartPrice, products } = userCart

  return (
    <CheckoutClient
      cartId={id}
      products={products}
      totalCartPrice={totalCartPrice}
    />
  )
}
