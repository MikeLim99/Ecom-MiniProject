import React from "react";
import ProductCards from "../component/basics/ProductCards";
import TextHeader from "../component/basics/TextHeader";

function CartPage() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10">
        <TextHeader Title={"My Cart"} />
      </div>
    </div>
  );
}

export default CartPage;
