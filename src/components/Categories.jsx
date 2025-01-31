/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `p-2 flex pl-8 mb-2 rounded-full ${
            isActive ? "bg-[#9538E2] text-white" : "bg-[#e2e1e4]"
          }`
        }
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          className={({ isActive }) =>
            `p-2 flex pl-8  mb-2 rounded-full ${
              isActive ? "bg-[#9538E2] text-white" : "bg-[#e2e1e4]"
            }`
          }
          key={category.id}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
