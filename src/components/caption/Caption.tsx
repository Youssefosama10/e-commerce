import React from 'react'
import { FaArrowRotateLeft, FaHeadset, FaShieldHalved, FaTruck } from 'react-icons/fa6';

export default function Caption() {

    const features = [
      {
        title: "Free Shipping",
        desc: "On orders over 500 EGP",
        icon: <FaTruck className="text-green-500" />, // يمكنك استبدالها بأيقونات Lucide أو FontAwesome
      },
      {
        title: "Easy Returns",
        desc: "14-day return policy",
        icon: <FaArrowRotateLeft className="text-green-500" />,
      },
      {
        title: "Secure Payment",
        desc: "100% secure checkout",
        icon: <FaShieldHalved className="text-green-500" />,
      },
      {
        title: "24/7 Support",
        desc: "Contact us anytime",
        icon: <FaHeadset className="text-green-500" />,
      },
    ];
  return (
    
    <div className="bg-[#f0fff4] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* مربع الأيقونة */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#dcfce7] rounded-xl text-[#166534] text-xl">
              {item.icon}
            </div>
            
            {/* النصوص */}
            <div>
              <h3 className="font-bold text-[#064e3b] text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  