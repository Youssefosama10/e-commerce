'use server'
import { userToken } from '_/app/utlis';

export async function AddProductwishlist(id: string): Promise<number | false> {
  const usertoken = await userToken()

  if (usertoken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        method: "post",
        headers: { token: usertoken, "content-Type": "application/json" },
        body: JSON.stringify({ productId: id })
      })

      const finalRes = await res.json()
      console.log("finalRes from wishlist", finalRes);

      if (res.ok) {
        return finalRes.data.length as number
      }

    } catch (error) {

    }

  }

  return false
}


export async function DeleteElment(id: string): Promise<number | false> {
  const token = await userToken()

  if (token) {
    try {

      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        method: "DELETE",
        headers: { token }
      })

      if (res.ok) {
        const finalRes = await res.json()
        console.log("finalRes form delete", finalRes);
        const { revalidatePath } = await import('next/cache')
        revalidatePath('/wishlist')
        return finalRes.data.length as number
      }
    } catch (error) {

    }
  }

  return false
}