import Caption from "_/components/caption/Caption";
import Header from "_/components/Header/Header";
import Link from "next/link";
import React from "react";

type EmptyStateProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onAction?: () => void;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Products Found",
  description = "No products match your current filters.",
  buttonText = "View All Products",
  onAction,
}) => {
  return (
 <>
 
 
 <Header title="All Products" desc="Explore our complete product collection" color="bg-green-500"  />
    <div className=" bg-gray-50 flex flex-col">

      {/* Top Filters */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
            />
          </svg>
          <span className="font-medium text-gray-700">
            Active Filters:
          </span>
          <button className="text-gray-600 hover:underline">
            Clear all
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing 0 products
        </p>
      </div>

      {/* Empty State */}
      <div className="flex mb-20 flex-1 items-center justify-center">
        <div className="text-center ">

          {/* Icon */}
          <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2h6v2m-6-6h6m-9 8V7a2 2 0 012-2h8a2 2 0 012 2v12l-4-2-4 2-4-2-4 2z"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>

          {/* Button */}
          <div className="mt-6">
        <Link href="/shop">
        <button
              onClick={onAction}
              className="px-6 py-3 cursor-pointer bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
            >
              {buttonText}
            </button>
        </Link>
          </div>

        </div>
      </div>
    </div>
    <Caption/>
 </>
  );
};

export default EmptyState;