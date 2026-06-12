
import GetAllBrands from "_/API/route.services";
import Header from "_/components/Header/Header";

export default async function Brands() {
  const res = await GetAllBrands();

  return (
    <>
      <Header color="bg-[#8740FF]" title="Top Brands" desc="Shop from your favorite brands" />

      <div className="min-h-screen bg-[#f4f6fb] px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {res?.map(function (Item) {
            return (
              <div
              key={Item._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[220px] sm:w-[220px] flex flex-col items-center p-3 sm:p-4 cursor-pointer mx-auto"
            >
              {/* Image Container */}
              <div className="bg-[#f4f6fb] rounded-2xl p-4 sm:p-5 flex items-center justify-center w-full h-[100px] sm:h-[110px]">
                <img
                  src={Item.image}
                  alt={Item.name}
                  className="max-h-[60px] sm:max-h-[70px] max-w-[90px] sm:max-w-[110px] object-contain"
                />
              </div>
            
              {/* Brand Name */}
              <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm font-medium">
                {Item.name}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
