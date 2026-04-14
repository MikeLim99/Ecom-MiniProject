import React, { useState } from "react";
import { useAuthContext } from "../../../hooks/Auth/useAuthContext";
import { useGetOrderHistory } from "../../../hooks/customer/OrderHistory/useGetOrderHistory";
import { getImageUrl } from "../../../utils/getImageURLs";
import usePostAReview from "../../../hooks/customer/OrderHistory/usePostAReview";

function RatingReviews() {
  const { user } = useAuthContext();
  const customerId = user?._id || null;
  const { orderHistory, loading, error } = useGetOrderHistory(customerId);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { postAReview, reviewData, setReviewData } = usePostAReview();

  const selectedProduct = selectedOrder?.items?.[0]?.productId;

  const handleOpenRate = (order) => {
    const productId = order?.items?.[0]?.productId?._id || "";
    setReviewData((prev) => ({
      ...prev,
      productId,
      comment: "",
      rating: prev.rating || 1,
    }));
    setSelectedOrder(order);
  };
  return (
    <>
      {/* Right Card Header Content */}
      <div className="flex items-center gap-1">
        <div className="h-8 w-2 bg-[#FFBE0B]"></div>
        <h1 className="text-3xl font-bold text-[#003F91]">Ratings and Reviews</h1>
      </div>
      <div className="mt-6 h-[2px] bg-[#D9D9D9] w-full"></div>

      {/* Reviews Container */}
      <div className="mt-2 space-y-6">
        {loading && <p>Loading order history...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && orderHistory.length === 0 && <p>No order history found.</p>}

        {!loading &&
          !error &&
          orderHistory.map((order, index) => {
            const product = order?.items?.[0]?.productId;
            const myReview = product?.reviews?.find(
              (review) => review?.userId?.toString() === user?._id
            );

            if (myReview) {
              return (
                <div
                  key={order?._id || `review-${index}`}
                  className="border border-[#d9d9d9] rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full">
                      <img src="/user.png" alt="user" />
                    </div>
                    <div>
                      <p className="text-[#003F91] font-bold text-sm">
                        {user?.firstname} {user?.lastname}
                      </p>
                      <div className="text-[#FFBE0B] text-xs flex">
                        {Array.from({ length: myReview?.rating || 0 }, (_, i) => (
                          <img key={i} src="/star.png" alt="star" className="w-4 h-4" />
                        ))}
                      </div>
                      <p className="text-[10px] font-bold mt-1">{order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : "No date available"}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 mt-4">
                    <div className="w-20 h-20 rounded border border-[#d9d9d9] overflow-hidden">
                      {product?.productImage ? (
                        <img
                          src={getImageUrl(product.productImage)}
                          alt={product?.productName || product?.name || "Product"}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">
                          No image
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-medium mt-1">
                      {myReview?.comment || "You did not review this product yet."}
                    </p>
                  </div>

                  <p className="font-bold text-[11px] mt-2">{product?.productName || "No Name Available"}</p>
                  <div className="mt-4 bg-[#D9D9D9] p-2 rounded text-[11px]">
                    <span className="font-bold">Seller Response: </span>We very much appreciate your support and we will continue to not disappoint!
                  </div>
                </div>
              );
            }

            return (
              <div
                key={order?._id || `rate-${index}`}
                className="mt-10 border border-[#d9d9d9] rounded-xl p-8 flex items-center justify-between"
              >
                <div className="w-20 h-20 rounded border border-[#d9d9d9] overflow-hidden">
                  {product?.productImage ? (
                    <img
                      src={getImageUrl(product.productImage)}
                      alt={product?.productName || "product"}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img src="/ryzen.png" alt="product" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="flex-1 ml-10 flex flex-col items-end gap-3">
                  <div className="bg-[#003F91] w-full py-4 rounded-lg text-white text-center font-bold text-sm">
                    Rate {product?.productName} to get free {product?.price*.001} coins and vouchers!
                  </div>
                  <button
                    className="bg-[#FFBE0B] px-14 py-2.5 rounded-full font-bold text-lg"
                    onClick={() => handleOpenRate(order)}
                    type="button"
                  >
                    Rate
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/20 flex items-center justify-center"
          onClick={() => setSelectedOrder(null)}
        >
          {console.log("Selected Order for Review:", selectedOrder._id)}
          <form onSubmit={(e) => postAReview(e, reviewData.productId, user?._id)}>
            <div className="bg-white p-6 rounded-lg w-[400px]" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-lg font-bold mb-4">Rate this Product</h2>
              <p className="text-sm mb-2 font-semibold">{selectedProduct?.productName || "Product"}</p>
              <p className="text-sm mb-4">Please share your experience with this product.</p>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`w-6 h-6 ${reviewData.rating >= star ? "opacity-100" : "opacity-40"}`}
                    onClick={() => setReviewData({ ...reviewData, rating: star })}
                  >
                    <img src="/star.png" alt={`star-${star}`} className="w-6 h-6" />
                  </button>
                ))}
              </div>
              <textarea
                className="border border-[#d9d9d9] rounded p-2 w-full h-20"
                placeholder="Write your review here..."
                value={reviewData.comment}
                onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
              ></textarea>
              <button className="bg-[#003F91] text-white py-2 px-4 rounded-lg mt-4" type="submit">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default RatingReviews;