import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const Food = ({ category }) => {
  const { food } = useContext(StoreContext);

  return (
    <div className="mt-7 px-[5%]" id="food">
      <div className="grid gap-x-[30px] gap-y-[40px] mt-[30px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
        {food.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={`food-${item._id}`}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Food;
