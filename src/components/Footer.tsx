import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot, FaCartShopping } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#071a2c] text-slate-300 pt-16 px-6 md:px-20 pb-6">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

    {/* About */}
    <div className="lg:col-span-2">
      <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg w-fit mb-4 font-bold">
        <FaCartShopping className="text-green-500" />
        FreshCart
      </div>

      <p className="text-sm leading-7 mb-4">
        FreshCart is your one-stop destination for quality products.
        From fashion to electronics, we bring you the best brands at
        competitive prices with a seamless shopping experience.
      </p>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <FaPhone className="text-green-500" />
          +1 (800) 123-4567
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-green-500" />
          support@freshcart.com
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-green-500" />
          123 Commerce Street, New York, NY 10001
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0f2a44] hover:bg-green-500 hover:text-white cursor-pointer transition"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>

    {/* Columns */}
    {[
      {
        title: "Shop",
        links: ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"],
      },
      {
        title: "Account",
        links: ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"],
      },
      {
        title: "Support",
        links: ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"],
      },
    ].map((section, index) => (
      <div key={index}>
        <h3 className="text-white mb-4 font-semibold">{section.title}</h3>
        <ul className="space-y-2 text-sm">
          {section.links.map((link, i) => (
            <li
              key={i}
              className="hover:text-green-400 cursor-pointer transition"
            >
              <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link>
            
            </li>
          ))}
        </ul>
      </div>
    ))}

  </div>

  {/* Bottom */}
  <div className="border-t border-slate-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm">
    <p>© 2026 FreshCart. All rights reserved.</p>

    <div className="flex gap-4 mt-3 md:mt-0 text-lg text-slate-400">
      <i className="fa-brands fa-cc-visa"></i>
      <i className="fa-brands fa-cc-mastercard"></i>
      <i className="fa-brands fa-cc-paypal"></i>
    </div>
  </div>

</footer>
  )
}
