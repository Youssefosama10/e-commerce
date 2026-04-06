'use client'
import { CartResponse, userwishlist } from "_/API/types"
import { createContext , Dispatch, ReactNode , SetStateAction, useContext, useState } from "react"

interface CartContextType {
  ItemCart: number
  setItemCart: Dispatch<SetStateAction<number>>
  wishlistNumber: number
  setwishlist: Dispatch<SetStateAction<number>>
}

export const CartContext = createContext<CartContextType>({
  ItemCart: 0,
  setItemCart: () => {},
  wishlistNumber: 0,
  setwishlist: () => {},
})

export default function CardtContextProvider( { children , res , reswishlist } : { children: ReactNode , res : CartResponse | undefined  , reswishlist: userwishlist[] | undefined } ) {

  const [ItemCart , setItemCart] = useState(() => {
    return res === undefined ? 0  : res.products.length 
  })

  const [ wishlistNumber , setwishlist ] = useState( () => {
    return reswishlist === undefined ? 0 : reswishlist.length
  } )

  return (
    <CartContext.Provider value={ { ItemCart , setItemCart , wishlistNumber , setwishlist } }>
      {children}
    </CartContext.Provider>
  )
}


export function useCart(): CartContextType
{
  return useContext(CartContext)
}

export function useWishlist(): CartContextType
{
  return useContext(CartContext)
}