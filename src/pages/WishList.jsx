import { useEffect, useState } from "react";
import {
  getAllHeartProducts,
  removeHeartProduct,
} from "../utilities/utilities";

import WishListCard from "../components/WishListCard";

const WishList = () => {
  const [wishProducts, setWishProducts] = useState([]);
  useEffect(() => {
    const products = getAllHeartProducts();
    setWishProducts(products);
  }, []);
  const handleRemove = (id) => {
    removeHeartProduct(id);
    const products = getAllHeartProducts();
    setWishProducts(products);
  };

  return (
    <div className="">
      <h1 className="text-2xl">WishList container</h1>
      <div className="my-8">
        {wishProducts.map((product) => (
          <WishListCard
            handleRemove={handleRemove}
            key={product.product_id}
            product={product}
          ></WishListCard>
        ))}
      </div>
    </div>
  );
};

export default WishList;
