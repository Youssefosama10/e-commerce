'use client'
import { FaTrash } from 'react-icons/fa6'
import { DeleteProduct } from './CratActions'
import { useCart } from '../_Context/cardtContext'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function RemoveProduct({ id, productName }: { id: string; productName: string }) {
  const { setItemCart } = useCart()
  const [loading, setLoading] = useState(false)

  async function handleRemoveProduct() {
    const result = await Swal.fire({
      title: 'Remove Item?',
      html: `Remove item from your cart?`,
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
          const res = await DeleteProduct(id)
          if (res === null) throw new Error()
          return res
        } catch (error) {
          Swal.showValidationMessage(`Failed to delete product`)
          return null
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })

    if (result.isConfirmed && result.value !== null) {
      setItemCart(result.value)
      toast.success('The product has been successfully deleted')
    }
  }

  return (
    <div>
      <button
        onClick={handleRemoveProduct}
        disabled={loading}
        className="mt-2 cursor-pointer hover:bg-red-500 hover:text-white duration-150 text-red-500 border p-2 rounded disabled:opacity-50"
      >
        <FaTrash />
      </button>
    </div>
  )
}
