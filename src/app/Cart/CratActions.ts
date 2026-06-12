'use server'

import { revalidatePath } from "next/cache";
import { userToken } from "../utlis";
import { Order } from "_/API/types";

export async function AddProductCard( id : string )
{

  
  
  const tokenuser = await userToken()
  // console.log("test" , tokenuser);

 if( tokenuser ) 
 {
   
     try {
      const res =  await fetch("https://ecommerce.routemisr.com/api/v2/cart" , 
         {
           method : 'post',
           headers : { token : tokenuser , "content-Type" : "application/json"  },
           body : JSON.stringify( { productId : id } )
         }
       )
   
       if(res.ok)
       {
        const finalRes = await res.json()
       console.log('finalRes to add' , finalRes);
       return finalRes.numOfCartItems 
       }
       else 
       {
        return false
       }
       
   
     } 
     catch (error) {
       console.log( "erorr" , error );
       
     }

 }

 else 
 {
  return new Error("")
 }



}


export async function DeleteProduct(productId : string)
{

  const token =  await userToken()

  

  if(token)
  {
    try {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}` , {
      method : 'delete',
      headers : { token : token }
      })
      
      if(res.ok)
      {
       const finalRes = await res.json()
      //  console.log("finalRes Delete" , finalRes);
       revalidatePath('/Cart')
       return finalRes.numOfCartItems
      }
      else {
        return null
      }
  
    } catch (error) {
      
    }

  }
  else {
    return;
  }
}




export async function upDateProduct(productId : string , newCount : number)
{

  const token =  await userToken()

  

  if(token)
  {
    try {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}` , {
      method : 'put',
      headers : { token : token , "content-type" : "application/json" },
      body : JSON.stringify( { count: newCount  } )
      })
      
      if(res.ok)
      {
       const finalRes = await res.json()
       console.log("finalRes Delete" , finalRes);
       revalidatePath('/Cart')
       return finalRes.numOfCartItems
      }
      else {
        return null
      }
  
    } catch (error) {
      
    }

  }
  else {
    return;
  }
}


export async function createCashOrder(cartId : string , obj : Order)
{

  const token =  await userToken()

  

  if(token)
  {
    try {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}` , {
      method : 'post',
      headers : { token : token , "content-type" : "application/json" },
      body : JSON.stringify( obj )
      })
      
      if(res.ok)
      {
       const finalRes = await res.json()
       console.log("finalRes from creacting" , finalRes);
      //  revalidatePath('/Cart')
       return true
      }
      else {
        return false
      }
  
    } catch (error) {
      
    }

  }
  else {
    return;
  }
}


export async function createOnlienOrder(cartId : string , obj : Order)
{

  const token =  await userToken()

  

  if(token)
  {
    try {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://ecommercefreshcart-pi.vercel.app` , {
      method : 'post',
      headers : { token : token , "content-type" : "application/json" },
      body : JSON.stringify( obj )
      })
      
      if(res.ok)
      {
       const finalRes = await res.json()
       console.log("finalRes from Onlien" , finalRes);
      //  revalidatePath('/Cart')
       return finalRes.session.url
      }
      else {
        return false
      }
  
    } catch (error) {
      
    }

  }
  else {
    return;
  }
}