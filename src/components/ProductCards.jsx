import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    } else {
      setProducts(data.slice(0, 9));
    }
  }, [category, data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.product_id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
