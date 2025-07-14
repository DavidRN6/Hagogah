import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Hero from "../components/Hero";
import Food from "../components/Food";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food category={category} />
    </div>
  );
};

export default Home;
