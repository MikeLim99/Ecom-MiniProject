import React from "react";
import { getImageUrl } from "../../utils/getImageURLs";


function CartBox({ item, onIncrease, onDecrease, onRemove }) {
  const price = Number(item.price || 0);

  return (
    <div className="w-[80%] h-[160px] mx-auto border-b-2 border-gray-300">
      <div className="flex w-full items-center h-full justify-center">
        <div className="h-[150px] w-[150px]">
          <img
            src={getImageUrl(item.productImage)}
            alt={item.productName}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="basis-1/2 h-full p-4 flex flex-col justify-between">
          <h1 className="text-[15px]">{item.productName}</h1>
          <p className="text-[12px]">{item.description || "No description"}</p>
          <p className="text-[15px]">
            Price: <span className="text-contrast-200">${price.toFixed(2)}</span>
          </p>
        </div>

        <div className="basis-1/6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => onDecrease?.(item._id)}>-</button>
            <span>{item.quantity}</span>
            <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => onIncrease?.(item._id)}>+</button>
          </div>
          <button className="text-red-500 text-sm" onClick={() => onRemove?.(item._id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartBox;