// original code
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllProducts, removeAllProduct } from "../utilities/utilities";
import CartCard from "../components/CartCard";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const products = getAllProducts();
    setCartProducts(products);
  }, []);

  const handleSort = () => {
    const sorted = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sorted);
  };

  const totalCost = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const completePurchase = () => {
    setShowModal(true);
    removeAllProduct();
  };
  const closeModal = () => {
    setShowModal(false);
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 md:gap-0">
        {/* Title Section */}
        <div className="text-2xl">Cart</div>

        {/* Action Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <h1 className="text-lg md:text-base">
            Total Cost: $<span>{totalCost}</span>
          </h1>
          <NavLink
            onClick={handleSort}
            className="btn bg-white border-[#9538E2] text-[#9538E2] rounded-full w-full md:w-auto"
          >
            Sort by Price
          </NavLink>
          <button
            disabled={cartProducts.length === 0}
            onClick={completePurchase}
            className="btn rounded-full bg-[#9538E2] font-light text-white w-full md:w-auto"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="my-8">
        {cartProducts.map((product) => (
          <CartCard key={product.product_id} product={product}></CartCard>
        ))}
      </div>
      {/* modal show  */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-2">
            <TbRosetteDiscountCheckFilled className="mx-auto text-4xl text-green-400"></TbRosetteDiscountCheckFilled>
            <h1 className="text-2xl font bold">Payment Successfully</h1>
            <hr className="my-2 text-gray-200" />
            <p className="text-sm">Thanks for purchasing</p>
            <p className="text-sm">Tolal: ${totalCost}</p>
            <button
              onClick={closeModal}
              className="btn bg-[#9538E2] text-white rounded-full mt-4 px-6 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
