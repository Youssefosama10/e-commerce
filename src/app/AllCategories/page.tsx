
import { GetProductCategories } from '_/API/route.services'
import { FaLayerGroup, FaTag } from 'react-icons/fa6'
export default async function AllCategories( ) {

const allCategories = await GetProductCategories()
   
  return (
<>
<div className="bg-green-500 text-white p-8 ">
      
      {/* Breadcrumb */}
      <div className="text-sm mb-6 opacity-80">
        Home / <span className="font-medium">
        Categories</span>
      </div>
  
      {/* Content */}
      <div className="flex items-center gap-4">
        
        {/* Icon Box */}
        <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur">
        <FaLayerGroup className='tex' />
        
        </div>
  
        {/* Text */}
        <div>
          <h1 className="text-3xl font-bold">All Categories</h1>
          <p className="text-white/80 mt-1">
          Browse our wide range of product categories
          </p>
        </div>
  
      </div>
    </div>


    
    <div className="min-h-screen bg-[#f4f6fb] px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {allCategories?.map(function (Item) {
            return (

<div
  key={Item._id}
  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
>
  <div className="w-full flex justify-center">
    <img
      className="w-[200px] h-[200px] object-cover rounded-xl"
      src={Item.image}
      alt={Item.name}
    />
  </div>

  <div className="mt-4">
    <h1 className="text-lg font-semibold text-gray-800 text-center">
      {Item.name}
    </h1>
  </div>
</div>

            )
          })}
        </div>
      </div>

</>
  )
}
