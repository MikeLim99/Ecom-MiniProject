import React from "react";

function CartBox() {
  return (
    <div className="w-[80%] h-[160px] mx-auto border-b-2 border-gray-300">
      <div className="flex w-full items-center h-full justify-center">
        <div className="basis-1/12 flex items-center">
          <input type="checkbox" className="size-5 hover:cursor-pointer" />
        </div>
        <div className="h-[150px] w-[150px]">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.avqv6p5Qi-kzHRY5zjNMvwHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="basis-1/2 h-full p-4 flex flex-col justify-between">
          <h1 className="basis-1/3 text-[15px]">Ryzen 7 5600G</h1>
          <p className="basis-1/3 text-[12px]">Description</p>
          <p className="basis-2/3 items-end flex text-[15px]"> 
            Price: <span className="text-contrast-200">$500</span>
          </p>
        </div>
        <div className="basis-1/12">quantity</div>
      </div>
    </div>
  );
}

export default CartBox;
