
// import { cookies } from "next/headers"
import { Brands , CartResponse , CategoryType , ProductType , userwishlist } from "./types"
import { userToken } from "_/app/utlis"

export async function GetAllProducts(): Promise<ProductType[] | undefined> {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products', { cache: 'force-cache' })
    const finalRes = await res.json()

    return finalRes.data

  } catch (error) {

  }
}

// -----------------------------------------------------------------------------------------
export async function GetProductDetails(id: string): Promise<ProductType | undefined> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, { cache: 'force-cache' })
    const finalRes = await res.json()

    return finalRes.data

  } catch (error) {

  }
}


// -----------------------------------------------------------------------------------------
export async function GetProductCategories(): Promise<CategoryType[] | undefined> {

  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories', { cache: 'force-cache' })
    const finalRes = await res.json()

    return finalRes.data

  } catch (error) {

  }
}

// -----------------------------------------------------------------------------------------
export async function GetUserCart(): Promise<CartResponse | undefined> {
  const Tokenuser = await userToken()

  if (Tokenuser) {
    try {
      const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
        headers: { token: Tokenuser },
        // next: { tags : [ 'GetUserCart' ] }
      })
      const finalRes = await res.json()
      // console.log("finalRes to card", finalRes);
      return finalRes.data

    } catch (error) {

    }

  }

}

// -----------------------------------------------------------------------------------------
export default async function GetAllBrands(): Promise<Brands[] | undefined> {
  try {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands" , { cache : "force-cache" })

    if (response.ok) {
      const finalResult = await response.json()
      return finalResult.data
      // console.log("finalResult form Brand", finalResult.data);
    }

  } catch (error) {

  }
}

// -----------------------------------------------------------------------------------------
export async function Getuserwishlist(): Promise<userwishlist[] | undefined> {
  const tkn = await userToken()

  if (tkn) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        cache: 'no-store',
        headers: { token: tkn }
      })

      if (res.ok) {
        const finalRes = await res.json()
        // console.log("finalRes form userwishlist", finalRes);
        return finalRes.data
      }

    } catch (error) {

    }
  }
}


