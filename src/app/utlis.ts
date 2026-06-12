import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function userToken(): Promise< string | null >
{
  const cookie = await cookies()

 let NextAuthToken = cookie.get("next-auth.session-token")?.value || cookie.get("__Secure-next-auth.session-token")?.value
 
//  console.log(NextAuthToken);
 

 

const jwtres = await decode( { secret: process.env.NEXTAUTH_SECRET! , token: NextAuthToken } )

  if( jwtres )
  {
    return jwtres.RouteToken as string
  }

  else
  {
    return null
  }


}