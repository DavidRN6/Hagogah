import { useRef } from "react";
import { menu } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ExploreMenu = ({ category, setCategory }) => {
  const listRef = useRef(null);

  // كم يتحرك كل نقرة
  const SCROLL_AMOUNT = 300;

  const scrollLeft = () => {
    listRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section id="menu" className="flex flex-col gap-8 mt-8">
      {/* Title */}
      <header className="text-center">
        <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl">
          منيو حجوجة
        </h1>
        <p className="mt-7 text-lg sm:text-xl md:text-2xl">
          استمتع بتناول الطعام البيتي والفلاحي في أجواء رمضان
        </p>
      </header>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="
            flex items-center justify-center
            absolute left-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-[#d07635] backdrop-blur
            shadow transition z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* القائمة نفسها */}
        <div
          ref={listRef}
          id="menu-list"
          className="
            flex flex-row
            justify-start items-center
            gap-10 px-14
            overflow-x-auto overflow-y-hidden
            scrollbar-hide
            scroll-snap-x mandatory snap-mandatory
          "
        >
          {menu.map((item, index) => (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center snap-start"
            >
              <div className="lg:w-40 w-24 aspect-square rounded-full overflow-hidden">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-full h-full object-cover cursor-pointer"
                  draggable="false"
                />
              </div>
              <p className="mt-2.5 text-base whitespace-nowrap">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="
            flex items-center justify-center
            absolute right-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-[#d07635] backdrop-blur
            shadow transition z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* list img */}
      <img src="list.webp" alt="list" className="w-full mt-1.5" />
    </section>
  );
};

export default ExploreMenu;
