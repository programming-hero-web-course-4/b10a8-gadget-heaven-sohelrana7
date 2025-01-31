import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import ProductDetailsBanner from "../components/ProductDetailsBanner";
import { getAllHeartProducts } from "../utilities/utilities";

const ProductDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isHeartProduct, setIsHeartProduct] = useState(false);
  useEffect(() => {
    const singleProduct = data.find((product) => product.product_id === id);
    setProduct(singleProduct);
    const heartProduct = getAllHeartProducts();
    const isExist = heartProduct.find(
      (item) => item.product_id === singleProduct.product_id
    );
    if (isExist) {
      setIsHeartProduct(true);
    }
  }, [data, id]);

  return (
    <div>
      <ProductDetailsBanner
        product={product}
        isHeartProduct={isHeartProduct}
        setIsHeartProduct={setIsHeartProduct}
      ></ProductDetailsBanner>
    </div>
  );
};

export default ProductDetails;
