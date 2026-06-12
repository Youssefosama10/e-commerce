import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from 'jwt-decode'

 export const nextAuthConfig : NextAuthOptions = {
  providers : [ 
    Credentials({
      name: "Fresh Cart" ,
      credentials : 
      {
      
        email : { label : "Email" , type : "email" } ,
        password : { label : "Password" , type : "password" } ,
      },
      authorize: async function( credentials )
      {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin' , 
          {
            method : "post" , 
            body : JSON.stringify( credentials ) , 
            headers : { 'content-type' : 'application/json' }
          }
        )
        const finalRes = await response.json()
        // console.log("finalRes from Next-Auth" , finalRes);

        if(response.ok)
        {
          const { name , email } = finalRes.user

         const data : { id : string } = jwtDecode( finalRes.token )

          return { name , email , id: data.id , TokenCredentials : finalRes.token}
        }
        return null 
      }
    })
  
  ],
   
  jwt : {
    maxAge : 60 * 60 * 24 * 3 ,
  },

   pages : {
    signIn : "/login" ,
   },

   callbacks : {
    jwt : function(param){

      
      
     if(param.user)
     {
      param.token.RouteToken = param.user.TokenCredentials
      param.token.id = param.user.id
     }

    //  console.log("param" , param);

      return param.token
    },


    session : function(param){


      // if( param.user)
      // {
      //  param.session.id = param.user.id
      // }
      if (param.session.user) {
        param.session.user.id = param.token.id
      }
      return param.session
  
     }

   },

  
}