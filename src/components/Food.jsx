import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const Food = ({ category }) => {
  const { food } = useContext(StoreContext);

  return (
    <div className="mt-7" id="food">
      <div className="grid gap-x-[30px] gap-y-[40px] mt-[30px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {food.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Food;
