import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network Response is not OK");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log("There are Some Errors", error);
      setErrors((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      <h1 className="font-bold text-2xl mb-4">Product List</h1>
      {errors && <p className="text-red-800 text-2xl mb-4">{errors}</p>}

      <div className="flex flex-wrap gap-6 justify-around">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductItem item={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
