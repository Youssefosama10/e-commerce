import { GetAllProducts } from "_/API/route.services";
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaRedoAlt,
  FaRegEye,
  FaPlus,
} from "react-icons/fa";
import ProductCard from "./ProductCard/page";
import MySwiper from "_/components/MySwiper/MySwiper";
import Category from "_/components/Category";
import PromoDoubleBanner from "_/components/PromoBanner";
import img1 from '@images/images1 (2).png'
import img2 from '@images/images1 (2).png'
import img3 from '@images/images1 (2).png'
import { lazy, Suspense } from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Categorylazy = lazy( ()=> import("_/components/Category") )

export default async function HomePage() {




  const AllProducts = await GetAllProducts()
  // console.log('AllProducts' , AllProducts);
  

  return (

    <>
    <div className="mb-10">

      <MySwiper
        slides={[
          {
            image: img1.src,
            title: "Fresh Products Delivered to your Door",
            subtitle: "Your favorite groceries, always fresh and on time.",
            description: "Get 20% off your first order",
            primaryCtaLabel: "Shop Now",
            secondaryCtaLabel: "View Deals",
          },
          {
            image: img2.src,
            title: "Daily Essentials at Great Prices",
            subtitle: "Fresh, organic and locally sourced products.",
            description: "Save more with exclusive member discounts",
            primaryCtaLabel: "View Deals",
            secondaryCtaLabel: "Shop Now",
          },
          {
            image: img3.src,
            title: "Groceries Delivered in Minutes",
            subtitle: "From our store straight to your doorstep.",
            description: "Free delivery on orders over 300 EGP",
            primaryCtaLabel: "Order Now",
            secondaryCtaLabel: "Browse Products",
          },
        ]}
      />
    </div>


      <Suspense fallback ={ <FidgetSpinner/>}>
    <Categorylazy/>
      </Suspense>

      <PromoDoubleBanner />

    <h2 className="mt-10 text-3xl font-semibold border-l-4 border-[#009966] pl-3">
        Featured <span className="text-[#009966]">Products</span>
      </h2>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {AllProducts?.map((product) => (
         <ProductCard product={product} key = {product.id}/>
        ))}
      </div>
    
    </>
  )
}
