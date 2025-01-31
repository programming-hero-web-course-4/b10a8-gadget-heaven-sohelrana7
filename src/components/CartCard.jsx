/* eslint-disable react/prop-types */
import { TbXboxX } from "react-icons/tb";
import { Link } from "react-router-dom";

const CartCard = ({ product }) => {
  const { product_title, product_image, description, price } = product;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8 shadow-xl rounded-xl p-4 bg-white">
      <div className="col-span-1">
        <img src={product_image} alt="" />
      </div>
      <div className="col-span-3 space-y-4">
        <h1>{product_title}</h1>
        <p>{description}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="col-span-1">
        <Link>
          <TbXboxX className="text-red-400 text-3xl"></TbXboxX>
        </Link>
      </div>
    </div>
  );
};

export default CartCard;
