import { useState } from "react";
import addIcon from "../assets/icons/add.webp";
import removeIcon from "../assets/icons/remove.webp";
import addGreenIcon from "../assets/icons/add_icon_green.webp";

const FoodItem = ({ name, price, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="w-full mx-auto text-center">
      <div className="relative">
        <img src={image} alt="food-image" className="w-full" />
        {!itemCount ? (
          <img
            src={addIcon}
            alt="add-icon"
            onClick={() => setItemCount((prev) => prev + 1)}
            className="cursor-pointer w-9 absolute bottom-[15%] right-[9%] rounded-full"
          />
        ) : (
          <div className="absolute bottom-[15%] right-[9%] flex items-center gap-3 p-0.5 bg-white rounded-[50px]">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={removeIcon}
              alt="remove-icon"
              className="cursor-pointer md:w-8 w-7"
            />
            <p className="">{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={addGreenIcon}
              alt="add-green-icon"
              className="cursor-pointer md:w-8 w-7"
            />
          </div>
        )}
      </div>
      <p className="text-lg mb-4">{name}</p>
      <p className="text-[#d07635]">جنية {price}</p>
    </div>
  );
};

export default FoodItem;
