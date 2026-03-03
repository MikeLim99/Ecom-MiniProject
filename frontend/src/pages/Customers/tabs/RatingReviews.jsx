import React from "react";

function RatingReviews() {
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Ratings and Reviews</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>
      
      {/* Filter Buttons */}
      <div className="mt-4 flex gap-4">
        <div className="border border-[#D9D9D9] bg-white px-4 py-1 rounded-md text-xs font-bold">5 Stars ▾</div>
        <div className="border border-[#D9D9D9] bg-white px-4 py-1 rounded-md text-xs font-bold">Most Recent</div>
        <div className="border border-[#D9D9D9] bg-white px-4 py-1 rounded-md text-xs font-bold">With Media</div>
        <div className="border border-[#D9D9D9] bg-white px-4 py-1 rounded-md text-xs font-bold">To Rate</div>
      </div>

      {/* Reviews Container */}
      <div className="mt-2 space-y-6">

      {/* Review Card 1 */}
        <div className="border border-[#d9d9d9] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full">
               <img src="/user.png" alt="user" />
            </div>
            <div>
              <p className="text-[#003F91] font-bold text-sm">Michael Angelo Lim</p>
              <div className="text-[#FFBE0B] text-xs flex">
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold mt-1">02-14-26</p>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="w-20 h-20 rounded border border-[#d9d9d9] overflow-hidden">
               <img src="/ryzen.png" alt="product" />
            </div>
            <p className="text-xs font-medium mt-1">By far one of the most compatible version for my unit</p>
          </div>
          <p className="font-bold text-[11px] mt-2">Ryzen 7900</p>
          <div className="mt-4 bg-[#D9D9D9] p-2 rounded text-[11px]">
            <span className="font-bold">Seller Response: </span>We very much appreciate your support and we will continue to not disappoint!
          </div>
        </div>

      {/* Review Card 2 */}
        <div className="border border-[#d9d9d9] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full">
               <img src="/user.png" alt="user" />
            </div>
            <div>
              <p className="text-[#003F91] font-bold text-sm">Michael Angelo Lim</p>
              <div className="text-[#FFBE0B] text-xs flex">
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold mt-1">01-5-26</p>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="w-20 h-20 rounded border border-[#d9d9d9] overflow-hidden">
               <img src="/ryzen.png" alt="product" />
            </div>
            <p className="text-xs font-medium mt-1">I expected it to be a bit new, but there's a few dents in a few corners, specifically the bottom part</p>
          </div>
          <p className="font-bold text-[11px] mt-2">Ryzen 7900</p>
          <div className="mt-4 bg-[#D9D9D9] p-2 rounded text-[11px]">
            <span className="font-bold">Seller Response: </span>We are so sorry to hear that! We will make sure to do better!
          </div>
        </div>
      </div>

      {/* To Rate */}
      <div className="mt-10 border border-[#d9d9d9] rounded-xl p-8 flex items-center justify-between">   
            <div className="w-20 h-20 rounded border border-[#d9d9d9]">
               <img src="/ryzen.png" alt="product" />
               <p className="font-bold text-[11px] mt-2">Ryzen 7900</p>
            </div>
        <div className="flex-1 ml-10 flex flex-col items-end gap-3">
          <div className="bg-[#003F91] w-full py-4 rounded-lg text-white text-center font-bold text-sm">Rate me to get free coins and vouchers!</div>
          <button className="bg-[#FFBE0B] px-14 py-2.5 rounded-full font-bold text-lg">Rate</button>
        </div>
      </div>
    </>
  );
}

export default RatingReviews;