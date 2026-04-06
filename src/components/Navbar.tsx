"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "_/components/ui/navigation-menu"
import { Button } from "_/components/ui/button"
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6"
import {
  Gift,
  HeadphonesIcon,
  Heart,
  Mail,
  Phone,
  ShoppingCart,
  Truck,
  UserPlus,
  UserRound,
} from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { CartContext, useCart, useWishlist } from "_/app/_Context/cardtContext"

// const categories: { title: string; href: string }[] = [
//   {
//     title: "All Categories",
//     href: "#",
   
//   },
//   {
//     title: "Electronics",
//     href: "#",
   
//   },
//   {
//     title: "Women's Fashion",
//     href: "#"
//   },
//   {
//     title: "Men's Fashion",
//     href: "#",
//   },
//   {
//     title: "Beauty & Health",
//     href: "#",
//   },
//   {
//     title: "Brands",
//     href: "#",
//   },
// ]

export default function Navbar() {

   const router =  useRouter()

 async function handleLogOut()
  {
   await signOut( { redirect: false } )
   router.push('/login')
  }

 const session =  useSession()
const userName = session.data?.user?.name
 const isUserauthenticated = session.status === "authenticated"

const { ItemCart } = useCart()

   const { wishlistNumber } = useWishlist()


  return (
    <div className="w-full bg-gray-50">
      <div className="hidden items-center justify-between border-b border-gray-200 px-6 py-1 text-sm text-gray-700 md:flex">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <Truck className="h-3 w-3" />
            </span>
            <span className="whitespace-nowrap">
              Free Shipping on Orders 500 EGP
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <Gift className="h-3 w-3" />
            </span>
            <span className="whitespace-nowrap">New Arrivals Daily</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 text-emerald-500" />
            <span className="whitespace-nowrap">+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-emerald-500" />
            <span className="whitespace-nowrap">support@freshcart.com</span>
          </div>
          <div className="h-4 w-px bg-gray-300" />
          <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
           { isUserauthenticated ?  <Link href="/" className="flex items-center gap-1 hover:text-emerald-500">
              <UserRound className="h-3 w-3" />
              <span>{userName}</span>
            </Link> : <Link href="/login" className="flex items-center gap-1 hover:text-emerald-500">
              <UserRound className="h-3 w-3" />
              <span>Sign In</span>
            </Link>}
            <span className="text-gray-300">|</span>

            { isUserauthenticated ? 
            <button onClick={handleLogOut} className="flex items-center cursor-pointer gap-1 hover:text-red-500">
              <UserPlus className="h-3 w-3" />
              <span>Log Out</span>
            </button> :  <Link href="/register" className="flex items-center gap-1 hover:text-emerald-500">
              <UserPlus className="h-3 w-3" />
              <span>Sign Up</span>
            </Link>}
          </div>
        </div>
      </div>

      <NavigationMenu
        viewport={false}
        className="w-full max-w-none items-center justify-between bg-white px-6 py-3 shadow-sm sticky z-500 top-0"
      >
      <div className="flex flex-1 items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
            <FaCartShopping className="text-xl text-emerald-500" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-gray-800">
            FreshCart
          </span>
        </Link>

        <div className="ml-6 hidden max-w-xl flex-1 items-center overflow-hidden rounded-full bg-gray-100 text-sm shadow-sm md:flex">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="flex-1 border-none bg-transparent px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <FaMagnifyingGlass className="text-sm" />
          </button>
        </div>
      </div>

      <NavigationMenuList className="ml-6 flex items-center gap-4 text-sm text-gray-700">
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-2 text-sm font-medium text-gray-700 transition-colors hover:text-emerald-500"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild>
            <Link
              href="/shop"
              className="px-2 text-sm font-medium text-gray-700 transition-colors hover:text-emerald-500"
            >
              Shop
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden relative z-1000 md:flex">
          <NavigationMenuTrigger className="h-auto gap-1 rounded-none border-none bg-transparent px-0 text-sm font-medium text-gray-700 shadow-none hover:bg-transparent hover:text-emerald-500 data-open:bg-transparent">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="mt-1 rounded-xl z-500 relative bg-gray-100 p-3 shadow-md w-[260px]">
  <ul className="space-y-2 text-gray-700 font-medium relative z-500">
    
    <li>
      <Link href="/AllCategories" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition">
        All Categories
      </Link>
    </li>

    <li>
      <Link href="" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition">
        Electronics
      </Link>
    </li>

    <li>
      <Link href="" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition whitespace-nowrap">
        Women's Fashion
      </Link>
    </li>

    <li>
      <Link href="" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition whitespace-nowrap">
        Men's Fashion
      </Link>
    </li>

    <li>
      <Link href="" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition">
        Beauty & Health
      </Link>
    </li>

    <li>
      <Link href="" className="block px-2 py-1.5 rounded-md hover:bg-green-100 hover:text-green-500 transition">
        Brandes
      </Link>
    </li>

  </ul>
</NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink  asChild>
            <Link
              href="/brands"
              className="px-2 text-sm font-medium text-gray-700 transition-colors hover:text-emerald-500"
            >
              Brands
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden lg:flex items-center gap-2 pl-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <HeadphonesIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-medium text-gray-400">
              Support
            </span>
            <span className="text-xs font-semibold text-gray-700">
              24/7 Help
            </span>
          </div>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
        
        <Link href='/wishlist'>
        <button
            type="button"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>
       { isUserauthenticated && !!wishlistNumber &&  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white"> { wishlistNumber } </span> }
        </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <Link
          href='/Cart'
            className="relative cursor-pointer flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 hover:bg-emerald-100"
          >
            <ShoppingCart className="h-4 w-4" />
           {isUserauthenticated && ItemCart &&  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-white">
              {ItemCart}
            </span>}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
         { isUserauthenticated ?   <Button
            variant="default"
            size="lg"
            className="ml-1 rounded-full bg-emerald-500 px-5 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            <UserRound className="mr-2 h-4 w-4" />
           { userName }
          </Button> :   <Button
            variant="default"
            size="lg"
            className="ml-1 rounded-full bg-emerald-500 px-5 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            <UserRound className="mr-2 h-4 w-4" />
            Sign In
          </Button> }
        </NavigationMenuItem>
      </NavigationMenuList>

      </NavigationMenu>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 rounded-md p-2 text-sm hover:bg-gray-50">
            <div className="font-medium leading-none text-gray-800">
              {title}
            </div>
            <div className="line-clamp-2 text-xs text-gray-500">
              {children}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
