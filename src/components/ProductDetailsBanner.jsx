import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import { addHeartProduct, addProduct } from "../utilities/utilities";
/* eslint-disable react/prop-types */
const ProductDetailsBanner = ({
  product,
  isHeartProduct,
  setIsHeartProduct,
}) => {
  const {
    product_title,
    price,
    description,
    product_image,
    specification,
    rating,
    availability,
  } = product;
  const handleAddProduct = (product) => {
    addProduct(product);
  };
  const handleAddHeartProduct = (product) => {
    addHeartProduct(product);
    setIsHeartProduct(true);
  };
  return (
    <div>
      <div className="bg-[#9538E2] min-h-[440px] mt-4 rounded-3xl">
        <div className=" text-center text-white pt-16 space-y-6">
          <h1 className="text-xl lg:text-4xl lg:font-bold">Product Details</h1>
          <p className="text-xs md:text-base font-thin mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div className="w-7/12 mx-auto border border-white p-3 rounded-3xl relative -top-10 lg:relative lg:-top-36">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="p-6 rounded-4xl w-[400px] h-[400px] overflow-hidden">
            <img
              className="w-full h-full object-content"
              src={product_image}
              alt="Album"
            />
          </figure>
          <div className="space-y-4  p-6">
            <h2 className="card-title font-bold">{product_title}</h2>
            <p className="font-medium">Price: {price}</p>
            <button className="border border-[#309C08] bg-[#d3f8c6]  w-25 rounded-2xl">
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="text-sm">{description}</p>
            <ol className="text-sm">
              {specification?.map((spec, index) => (
                <li key={index}>
                  {index + 1}. {spec}
                </li>
              ))}
            </ol>
            <p>Rating: {rating}</p>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={() => handleAddProduct(product)}
                className="btn rounded-full bg-[#9538E2] font-light text-white"
              >
                Add To Cart <LuShoppingCart></LuShoppingCart>
              </button>
              <button
                disabled={isHeartProduct}
                onClick={() => handleAddHeartProduct(product)}
                className="btn btn-circle"
              >
                <CiHeart size={20}></CiHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsBanner;
