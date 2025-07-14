import { NavLink } from "react-router";
import { CookingPot, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex p-5 justify-between items-center">
      <img src="logo.webp" alt="logo" className="w-[85px]" />
      <ul className="flex gap-5 text-lg">
        <NavLink to="/" className="cursor-pointer">
          <p>الرئيسية</p>
          <hr className="w-full border-none  h-[2px] bg-[#d07635] hidden" />
        </NavLink>
        <NavLink to="/about" className="cursor-pointer">
          <p>عن حجوجة</p>
          <hr className="full border-none  h-[2px] bg-[#d07635] hidden" />
        </NavLink>
        <NavLink to="/menu" className="cursor-pointer">
          <p>منيو حجوجة</p>
          <hr className="w-full border-none  h-[2px] bg-[#d07635] hidden" />
        </NavLink>
        <NavLink to="/contact" className="cursor-pointer">
          <p>تواصل معانا</p>
          <hr className="w-full border-none h-[2px] bg-[#d07635] hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-10">
        <Search className="cursor-pointer w-8 h-8" />
        <div className="relative">
          <CookingPot className="cursor-pointer w-7 h-7" />
          <div className="absolute min-w-2.5 min-h-2.5 bg-[#d07635] rounded-md -top-2 -right-2"></div>
        </div>
        <button className="cursor-pointer bg-[#d07635] text-white py-2.5 px-[30px] rounded-md hover:bg-amber-700 transition duration-300">
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
};

export default Navbar;
