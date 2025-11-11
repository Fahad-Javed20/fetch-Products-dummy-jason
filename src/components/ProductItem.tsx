import type { ProductType } from "../types/ProductType";

interface ProductItemProps {
    item:ProductType;
}

const ProductItem = ({item}:ProductItemProps) => {
  
  return (
  <div>
    
      <div key={item.id} className="w-1/3 bg-white shadow-lg/30 rounded-md">
        <img
          className="h-52 w-full object-cover rounded-md"
          src="https://plus.unsplash.com/premium_photo-1762456150986-61cdf6363ca1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500"
          alt=""
        />
        <div className="mt-3 text-left px-4 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <p>
            {item.description}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="flex mt-3 px-4">
            <span className="font-bold mr-2">Price:</span>
            <span>${item.price}</span>
          </div>
          <div className="flex mt-3 px-4">
            <span className="font-bold mr-2">Discount:</span>
            <span>{item.discountPercentage}%</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5">
          <p className="text-gray-600">Rating: {item.rating}</p>
          <h1 className="self-end px-3 py-2">Total: ${(item.price-((item.price*item.discountPercentage)/100)).toFixed(2)}</h1>
        </div>

        <button className="bg-linear-to-r from-purple-600 to-pink-500 mt-5 px-3 py-2 w-full rounded-md">
          ADD TO CART
        </button>
      </div>
  </div>
);
}

export default ProductItem