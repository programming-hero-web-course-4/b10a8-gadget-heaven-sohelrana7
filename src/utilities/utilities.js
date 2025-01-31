import toast from "react-hot-toast";

// get all product from localStorage
const getAllProducts = () => {
  const allProducts = localStorage.getItem("products");
  if (allProducts) {
    const products = JSON.parse(allProducts);

    return products;
  }
  {
    return [];
  }
};
// add product to localStorage
const addProduct = (product) => {
  const products = getAllProducts();
  const isExist = products.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) return toast.error("already Product added!");
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  toast.success("Successfully product add to cart");
};

const removeAllProduct = () => {
  localStorage.removeItem("products");
};
export { addProduct, getAllProducts, removeAllProduct };

// get all product from localStorage
const getAllHeartProducts = () => {
  const allHeartProducts = localStorage.getItem("heartProducts");
  if (allHeartProducts) {
    const heartProducts = JSON.parse(allHeartProducts);

    return heartProducts;
  }
  {
    return [];
  }
};
// add product to localStorage
const addHeartProduct = (product) => {
  const heartProducts = getAllHeartProducts();

  heartProducts.push(product);
  localStorage.setItem("heartProducts", JSON.stringify(heartProducts));
  toast.success("Successfully heart product add");
};
const removeHeartProduct = (id) => {
  console.log(id);
  const products = getAllHeartProducts();
  const remaining = products.filter((product) => product.product_id != id);
  console.log(remaining);
  localStorage.setItem("heartProducts", JSON.stringify(remaining));
  toast.success("Successfully Product removed");
};

export { addHeartProduct, getAllHeartProducts, removeHeartProduct };
