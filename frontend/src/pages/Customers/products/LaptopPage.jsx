import React from "react";
import ProductCards from '../../../component/basics/ProductCards'
import TextHeader from '../../../component/basics/TextHeader'

function LaptopPage() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10">
        <TextHeader Title={"Laptop"} />
      </div>
      <div className="grid grid-cols-4 gap-5 my-10">
        <ProductCards category="laptop" />
      </div>
    </div>
  );
}

export default LaptopPage;
