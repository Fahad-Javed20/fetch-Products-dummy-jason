import type { ProductType } from "../types/ProductType";

interface ProductItemProps {
  item: ProductType;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const finalPrice = (item.price - (item.price * item.discountPercentage) / 100).toFixed(2);

  return (
    <div className="w-96 h-[550px] bg-white shadow-lg/30 rounded-md flex flex-col">
      <img
        className="h-52 w-full object-cover rounded-t-md"
        src={item.images}
        alt=""
      />
      <div className="flex-1 flex flex-col justify-between mt-3 px-4">
        <div>
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <p className="mt-2">{item.description}</p>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex">
            <span className="font-bold mr-2">Price:</span>
            <span>${item.price}</span>
          </div>
          <div className="flex">
            <span className="font-bold mr-2">Discount:</span>
            <span>{item.discountPercentage}%</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5">
          <p className="text-gray-600">Rating: {item.rating}</p>
        </div>
        <div className="flex justify-end">
            <span className="font-bold mr-2">Grand Total:</span>
            <span>${finalPrice}</span>
          </div>

        <button className="bg-linear-to-r from-purple-600 to-pink-500 mt-5 px-3 py-2 w-full rounded-md text-white mb-2">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
