import React from "react";

function AdminReviews() {
  return (
    <div className="flex flex-col w-full h-screen bg-white">
      
      {/* Header */}
      <div className="bg-[#F8F7F9] h-[128px] flex items-center px-15 text-[22px]">
        Reviews & Feedback
      </div>

      {/* Search */}
      <div className="bg-white flex flex-row items-center justify-between px-15 pt-5 pb-1 w-full">
        <div className="flex items-center gap-5">
          <span className="text-2xl">Search :</span>
          <input
            type="text"
            placeholder="Product Name"
            className="h-12 w-120 pl-4 rounded-md bg-[#F8F7F9] border border-[#D9D9D9]"
          />
        </div>
      </div>

      {/* Reviews Container/Border */}
      <div className="bg-white mx-15 h-screen overflow-auto my-10 p-8">
        {/* Review Cards Container */}
        <div className="flex flex-col items-center pb-10 bg-white">
          {/* Review Card 1 Container */}
          <div className="bg-white flex w-[1200px] border border-[#FFBE0B] rounded-xl p-6 gap-6">
            {/* Review Card 1 Product Container */}
            <div className="flex flex-col items-center w-[150px] bg-white">
              <div className="w-[120px] h-[120px] bg-purple-500">
                <img src="/ryzen.png" alt="product" className="w-30 h-30" />
              </div>
              <span className="text-[#003F91] text-sm mt-3">
                User Left a Review!
              </span>
              <div className="flex text-[yellow-500] text-xl mt-1">
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col bg-white flex-1">
              <span className="text-lg font-bold mb-2">Ryzen 5 5600G</span>
              <p className="text-black">
                I expected it to be a bit new, but there's a few dents in a few corners, specifically the bottom part
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="/user.png"
                  className="w-10 h-10 rounded-full"
                  alt="user"
                />
                <span className="text-sm text-black">Michael Angelo Lim</span>
              <p className="text-[10px] font-bold mt-1">01-5-26</p>
              </div>
          <input
            type="text"
            placeholder="Comment"
            className="mt-5 h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pb-10 bg-white">
          {/* Review Card 2 Container */}
          <div className="bg-white flex w-[1200px] border border-[#FFBE0B] rounded-xl p-6 gap-6">
            {/* Review Card 2 Product Container */}
            <div className="flex flex-col items-center w-[150px] bg-white">
              <div className="w-[120px] h-[120px] bg-purple-500">
                <img src="/ryzen.png" alt="product" className="w-30 h-30" />
              </div>
              <span className="text-[#003F91] text-sm mt-3">
                User Left a Review!
              </span>
              <div className="flex text-[yellow-500] text-xl mt-1">
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col bg-white flex-1">
              <span className="text-lg font-bold mb-2">Ryzen 5 5600G</span>
              <p className="text-black">
                By far one of the most compatible version for my unit
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="/user.png"
                  className="w-10 h-10 rounded-full"
                  alt="user"
                />
                <span className="text-sm text-black">Michael Angelo Lim</span>
              <p className="text-[10px] font-bold mt-1">02-14-26</p>
              </div>
          <input
            type="text"
            placeholder="Comment"
            className="mt-5 h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pb-10 bg-white">
          {/* Review Card 3 Container */}
          <div className="bg-white flex w-[1200px] border border-[#FFBE0B] rounded-xl p-6 gap-6">
            {/* Review Card 3 Product Container */}
            <div className="flex flex-col items-center w-[150px] bg-white">
              <div className="w-[120px] h-[120px] bg-purple-500">
                <img src="/ryzen.png" alt="product" className="w-30 h-30" />
              </div>
              <span className="text-[#003F91] text-sm mt-3">
                User Left a Review!
              </span>
              <div className="flex text-[yellow-500] text-xl mt-1">
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
                <img src="/star.png" alt="star" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col bg-white flex-1">
              <span className="text-lg font-bold mb-2">Ryzen 5 5600G</span>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                aliquam augue erat, eget sodales elit pharetra a. Fusce ornare
                est felis.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src="/user.png"
                  className="w-10 h-10 rounded-full"
                  alt="user"
                />
                <span className="text-sm text-black">Michael Angelo Lim</span>
              </div>
          <input
            type="text"
            placeholder="Comment"
            className="mt-5 h-10 w-[420px] pl-2 border border-[#d9d9d9] rounded-md w-full"
          />
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default AdminReviews;
