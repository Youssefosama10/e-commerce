import { nextAuthConfig } from '../../../../Next-Auth/nextAuth.config';
import NextAuth from "next-auth";



const routehandler =  NextAuth( nextAuthConfig )

export { routehandler as GET , routehandler as POST }