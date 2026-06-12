import { userwishlist } from '_/API/types'
import { Getuserwishlist } from '_/API/route.services'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '_/components/ui/table'
import { ShoppingCart } from 'lucide-react'
import WishlistDeleteButton from './WishlistDeleteButton'
import Link from 'next/link'

export default async function wishlist() {

  const Cardswishlist: userwishlist[] | undefined = await Getuserwishlist()

  return (
    <div className="w-full">
    <h1 className="text-2xl font-bold text-slate-800 mb-6 mt-5">
      My Wishlist
    </h1>
  
    {!Cardswishlist || Cardswishlist.length === 0 ? (
      <div className="flex flex-col items-center justify-center py-12 sm:py-24 gap-5">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </div>
  
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center">
          Your wishlist is empty
        </h2>
  
        <p className="text-slate-400 text-sm text-center max-w-xs px-2">
          Browse products and save your favorites here.
        </p>
  
        <Link
          href="/"
          className="w-full sm:w-auto flex justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-10 py-3 rounded-full"
        >
          Browse Products →
        </Link>
      </div>
    ) : (
      <>
        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block w-[75%] mx-auto overflow-x-auto">
          <Table className="w-full min-w-[700px]">
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[400px]">Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
  
            <TableBody>
              {Cardswishlist.map((Item: userwishlist) => (
                <TableRow key={Item._id}>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 overflow-hidden rounded-lg border bg-slate-50 p-1">
                        <img
                          src={Item.imageCover}
                          alt={Item.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
  
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-slate-900 truncate">
                          {Item.title.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </div>
                    </div>
                  </TableCell>
  
                  <TableCell className="font-bold text-slate-900">
                    {Item.price} EGP
                  </TableCell>
  
                  <TableCell>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded px-3 py-1 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      In Stock
                    </span>
                  </TableCell>
  
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="bg-[#16A34A] flex items-center p-2 rounded text-white gap-2 px-4">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
  
                      <WishlistDeleteButton
                        id={Item._id}
                        productName={Item.title.split(" ").slice(0, 2).join(" ")}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
  
        {/* ================= MOBILE CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {Cardswishlist.map((Item: userwishlist) => (
            <div
              key={Item._id}
              className="border rounded-xl p-4 bg-white shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={Item.imageCover}
                  alt={Item.title}
                  className="h-14 w-14 rounded-lg object-contain border"
                />
  
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900 text-sm">
                    {Item.title.split(" ").slice(0, 2).join(" ")}
                  </span>
  
                  <span className="text-sm font-bold text-slate-900">
                    {Item.price} EGP
                  </span>
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  In Stock
                </span>
  
                <div className="flex gap-2">
                  <button className="bg-[#16A34A] flex items-center justify-center p-2 rounded text-white">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
  
                  <WishlistDeleteButton
                    id={Item._id}
                    productName={Item.title.split(" ").slice(0, 2).join(" ")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  )
}
