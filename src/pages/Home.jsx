import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";

import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h1 className="text-xl lg:text-2xl text-center font-semibold lg:font-bold ">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
        <div className=" h-fit ">
          <Categories categories={categories}></Categories>
        </div>

        <div className="lg:col-span-4 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
