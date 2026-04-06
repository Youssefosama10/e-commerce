'use client'
import { Trash2 } from 'lucide-react'
import { DeleteElment } from './wishlistActions'
import { useWishlist } from '../_Context/cardtContext'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function WishlistDeleteButton({ id, productName }: { id: string; productName: string }) {
  const { setwishlist } = useWishlist()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    const result = await Swal.fire({
      title: 'Remove Item?',
      html: `Remove <b>${productName}</b> from your wishlist?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#9ca3af',
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      customClass: {
        container: 'z-[99999]' // Ensure it's above any navbar or sticky header
      },
      preConfirm: async () => {
        try {
          const newCount = await DeleteElment(id)
          if (newCount === false) throw new Error()
          return newCount
        } catch (error) {
          Swal.showValidationMessage(`Failed to remove product`)
          return false
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })

    if (result.isConfirmed && result.value !== false) {
      setwishlist(result.value)
      toast.success('Product removed from wishlist')
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
