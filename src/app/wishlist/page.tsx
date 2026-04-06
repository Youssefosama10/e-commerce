import { userwishlist } from '_/API/types'
import { Getuserwishlist } from '_/API/route.services'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '_/components/ui/table'
import { ShoppingCart } from 'lucide-react'
import WishlistDeleteButton from './WishlistDeleteButton'
import Link from 'next/link'

export default async function wishlist() {

  const Cardswishlist: userwishlist[] | undefined = await Getuserwishlist()

  return (
    <div className='max-w-5xl mx-auto p-6'>

      <h1 className="text-2xl font-bold text-slate-800 mb-6">My Wishlist</h1>

      {!Cardswishlist || Cardswishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-5">
          {/* Heart icon box */}
          <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-800">Your wishlist is empty</h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm text-center max-w-xs leading-relaxed">
            Browse products and save your favorites here. Sign in to sync your wishlist across devices.
          </p>

          {/* CTA Button */}
          <Link
            href="/"
            className="mt-2 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-semibold px-10 py-3 rounded-full flex items-center gap-2"
          >
            Browse Products <span>→</span>
          </Link>
        </div>
      ) : (
        <Table className='w-full'>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead className="w-[400px]">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Cardswishlist.map(function (Item: userwishlist) {
              return (
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
                      <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">
  {Item.title.split(" ").slice(0, 2).join(" ")}
</span>
                        <span className="text-sm text-slate-500">{Item.price} EGP</span>
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
                      <button className="bg-[#16A34A] flex items-center p-2 rounded hover:bg-emerald-700 text-white gap-2 px-4 cursor-pointer transition-colors">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                      <WishlistDeleteButton id={Item._id} productName={Item.title.split(' ').slice(0, 2).join(' ')} />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}

    </div>
  )
}
