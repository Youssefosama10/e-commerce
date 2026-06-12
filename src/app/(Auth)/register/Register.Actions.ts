'use server'

import { RegisterObjectType } from "./register.types";


 export async function RegisterActions(data : RegisterObjectType)
{
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" , 
       {
         method : "post",
         body : JSON.stringify(data) ,
         headers : { 'content-type' : 'application/json' }
       }
     )
      const finalRes = await res.json()
      // console.log("finalRes form Register Action" , finalRes);
     return res.ok
   } catch (error) {
     
   } 
}