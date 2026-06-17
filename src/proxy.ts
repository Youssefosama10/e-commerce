import { getToken } from "next-auth/jwt";
import { NextRequest , NextResponse } from "next/server";

export async function proxy(req : NextRequest)
{
  
  const Token =  await getToken( { req , secret : process.env.NEXTAUTH_SECRET } )

    
    if(!!Token)
    {
      return NextResponse.next()
    }

  return NextResponse.redirect(`${process.env.NEXTAUTH_URL}login`)
}

export const config = { matcher : [ "/Cart" , "/wishlist" ] }