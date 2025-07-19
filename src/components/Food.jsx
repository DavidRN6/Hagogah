import { useContext, useMemo } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { AnimatePresence, motion } from "framer-motion";

const Food = ({ category }) => {
  const { food, search } = useContext(StoreContext);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return food.filter((item) => {
      const inCategory = category === "All" || category === item.category;

      const matchSearch =
        !item ||
        item.name.toLowerCase().includes(term) ||
        (item.category && item.category.toLowerCase().includes(term));

      return inCategory && matchSearch;
    });
  }, [food, search, category]);

  return (
    <div className="mt-7 px-[5%]" id="food">
      <div className="grid gap-x-[30px] gap-y-[40px] mt-[30px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
        <AnimatePresence mode="popLayout">
          {filtered.length ? (
            filtered.map((item) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <FoodItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="col-span-full text-center text-[#d07635]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              لا يوجد طبق يطابق كلمة {search}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Food;
