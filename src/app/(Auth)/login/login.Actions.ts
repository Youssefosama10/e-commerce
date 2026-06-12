'use server'
import { cookies } from "next/headers";
import { LoginObjectType } from "./login.types";



 export async function LoginActions(data : LoginObjectType)
{
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin" , 
       {
         method : "post",
         body : JSON.stringify(data) ,
         headers : { 'content-type' : 'application/json' }
       }
     )
      const finalRes = await res.json()
      // console.log("finalRes form Login Action" , finalRes);

     if(res.ok)
     {
      const cookie = await cookies()

      cookie.set('tkn' , finalRes.token , 
        {
          httpOnly : true , 
          secure : true , 
          sameSite : "strict"
        }
      )
      return true
     }
     return false
   } catch (error) {
     
   } 
}