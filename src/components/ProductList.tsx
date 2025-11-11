import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import type { ProductType } from "../types/ProductType";

interface ProductListProps {
    product:ProductType[];
}

const [products, setProducts] = useState<ProductType[]>([]);
const [loading, setLoading] = useState<boolean>(false);
const [errors, setErrors] = useState<string>("");

const ProductList = ({product}:ProductListProps) => {

    const fetchData = async () => {
    try {
    //   setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error ("NetWork Response is not oK");
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
  },[]);


  return (
    <div>
        {loading && <p>loading...</p>}
      <h1 className="font-bold text-2xl">Product List</h1>
      {errors && <p className="text-red-800 text-2xl">{errors}</p>}
      
      {products.map((product)=>(
        <ProductItem 
        key={product.id}
        item = {product}
        />
      ))}
      <ProductItem />


    </div>
  );
};

export default ProductList;
