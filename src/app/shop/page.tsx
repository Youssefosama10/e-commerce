import { GetAllProducts } from '_/API/route.services';
import Header from '_/components/Header/Header';
import ProductCard from '../ProductCard/page';
import { ProductType } from '_/API/types';

export default async function Shop() {
  const AllProducts = await GetAllProducts() as ProductType[];

  return (
    <>
      <Header 
        title={"All Products"} 
        desc={"Explore our complete collection"} 
        color={"from-green-500 to-green-700"} 
      />
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {AllProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
