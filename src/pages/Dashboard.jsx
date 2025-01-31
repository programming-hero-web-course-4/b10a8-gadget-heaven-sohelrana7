import { useState } from "react";
import WishList from "./WishList";
import Cart from "./Cart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div>
      <div className="bg-[#9538E2] min-h-[280px] mt-4 lg:p-0 p-4">
        <div className="text-center text-white pt-16 space-y-6">
          <h1 className="text-xl lg:text-4xl lg:font-bold">Dashboard</h1>
          <p className="text-xs md:text-base font-thin mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              className={`btn rounded-full ${
                activeTab === "cart"
                  ? "bg-white font-light "
                  : "bg-[#9538E2] text-white font-light"
              }`}
              onClick={() => setActiveTab("cart")}
            >
              Cart
            </button>
            <button
              className={`btn rounded-full ${
                activeTab === "wishlist"
                  ? "bg-white font-light "
                  : "bg-[#9538E2] text-white font-light"
              }`}
              onClick={() => setActiveTab("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="my-8 bg-gray-100 p-8">
        {activeTab === "cart" ? <Cart /> : <WishList />}
      </div>
    </div>
  );
};

export default Dashboard;
