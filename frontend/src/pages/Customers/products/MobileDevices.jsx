import React from "react";
import TextHeader from '../../../component/basics/TextHeader'
import ProductCards from "../../../component/basics/ProductCards";

function MobileDevices() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="my-10">
        <TextHeader Title={"Mobile Devices"} />
      </div>
      <div className="grid grid-cols-4 gap-5 my-10">
        <ProductCards category="phone" />
      </div>
    </div>
  );
}

export default MobileDevices;
