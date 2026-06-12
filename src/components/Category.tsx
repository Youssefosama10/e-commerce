import { GetProductCategories } from "_/API/route.services";
import Link from "next/link";

export default async function Category() {
  const allCategories = (await GetProductCategories()) ?? [];
  const visibleCategories = allCategories.slice(0, 10);

  if (!visibleCategories.length) return null;

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-[#009966] pl-3">
          Shop By <span className="text-[#009966]">Category</span>
        </h2>

        <Link
          href="/AllCategories"
          className="text-sm md:text-base text-[#009966]  flex items-center gap-1"
        >
          View All Categories
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {visibleCategories.map((category) => (
          <Link
            key={category._id}
         href=''
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-between hover:shadow-md hover:-translate-y-1 transition duration-200"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm md:text-base font-medium text-gray-800 text-center">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
