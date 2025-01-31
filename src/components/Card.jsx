import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10 ">
        <img
          src={product_image}
          alt="Shoes"
          className="h-[160px] w-[210px] rounded-xl "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions">
          <Link
            to={`/product/${product_id}`}
            className="btn bg-white border-[#9538E2] text-[#9538E2] rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
