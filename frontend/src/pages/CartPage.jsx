import React from "react";
import ProductCards from "../component/basics/ProductCards";
import TextHeader from "../component/basics/TextHeader";
import CartBox from "../component/basics/CartBox";
import Button from "../component/basics/Button";

function CartPage() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10">
        <TextHeader Title={"My Cart"} />
        <div className="my-20 h-[500px] overflow-y-auto">
          <CartBox />
          <CartBox />
          <CartBox />
          <CartBox />
          <CartBox />
          <CartBox />
          <CartBox />
        </div>
        <div className="fixed bottom-0 w-[80%] h-[120px] bg-blue-300 shadow-lg flex items-center justify-around rounded-t-lg">
          <h1 className="text-[30px] font-bold basis-1/4 text-center"><span className="text-contrast">iTech</span> <span className="text-highlight">Store</span></h1>
          <div className="flex gap-5">
            <div>
            <p>Items</p>
            <p>Discounts</p>
            <p>Total</p>
            </div>
            <div>
            <p>: 1</p>
            <p>: $0.00</p>
            <p>: $20.00</p>
            </div>
          </div>
          <Button Title={"Checkout"} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
