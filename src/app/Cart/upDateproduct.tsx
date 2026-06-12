"use client"
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { upDateProduct } from './CratActions'

export default function UpDateproduct( { isIncrement = false , id , count } :  { isIncrement? : boolean  , id : string , count : number} ) {

 async function handleupDate()
  {
      const res = await upDateProduct(id , count)
  }

  return (
    <div>
       <button onClick={handleupDate} disabled={ count <= 0} className="px-2  py-1 border cursor-pointer rounded">
        { isIncrement ? <FaMinus />   :    <FaPlus /> }
       </button>
    </div>
  )
}

