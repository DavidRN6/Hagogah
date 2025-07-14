import { ChevronLeft, CookingPot, Search } from "lucide-react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex p-[1%] justify-between items-center">
      <img src="logo.webp" alt="logo" className="w-[85px]" />
      {/* Menu For large Screen */}
      <ul className="hidden md:flex gap-5 text-xl">
        <li className="cursor-pointer">الرئيسية</li>
        <li className="cursor-pointer">عن حجوجة</li>
        <li className="cursor-pointer">منيو حجوجة</li>
      </ul>
      <div className="flex items-center gap-8 md:gap-10">
        <Search className="cursor-pointer w-8 h-8" />
        <div className="relative">
          <CookingPot className="cursor-pointer w-7 h-7" />
          <div className="absolute min-w-2.5 min-h-2.5 bg-[#d07635] rounded-md -top-2 -right-2"></div>
        </div>
        <button className="cursor-pointer hidden md:flex bg-[#d07635] text-white py-2.5 px-[30px] rounded-md hover:bg-amber-700 transition duration-300">
          تسجيل الدخول
        </button>
        <span
          onClick={() => setVisible(true)}
          className="md:hidden cursor-pointer text-4xl"
        >
          <FiMenu />
        </span>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 z-10 overflow-hidden bg-white transition-all ${
          visible ? `w-[300px]` : `w-0`
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <span className="h-4 items-center">
              <ChevronLeft />
            </span>
            <p>رجوع</p>
          </div>

          <ul className="flex flex-col gap-5 items-center justify-center mt-6">
            <li>
              <button className="cursor-pointer bg-white border-2 border-[#d07635] text-[#d07635] py-2.5 px-[30px] rounded-md hover:bg-[#d07635] hover:text-white transition duration-200">
                الرئيسية
              </button>
            </li>
            <li>
              <button className="cursor-pointer bg-white border-2 border-[#d07635] text-[#d07635] py-2.5 px-[30px] rounded-md hover:bg-[#d07635] hover:text-white transition duration-200">
                عن حجوجة
              </button>
            </li>
            <li>
              <button className="cursor-pointer bg-white border-2 border-[#d07635] text-[#d07635] py-2.5 px-[30px] rounded-md hover:bg-[#d07635] hover:text-white transition duration-200">
                منيو حجوجة
              </button>
            </li>

            <button className="cursor-pointer flex bg-[#d07635] text-white py-2.5 px-[30px] mt-5 rounded-md hover:bg-amber-700 transition duration-300">
              تسجيل الدخول
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
