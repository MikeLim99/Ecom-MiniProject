import { useState } from "react";
import axiosClient from "../../../utils/axiosClient";

export default function usePostAReview() {
    const [ reviewData, setReviewData ] = useState({
        rating: 1,
        comment: '',
        productId: ''
    })

    const postAReview = async (e, productId, userId) => {
        e.preventDefault();
        if (!productId || !userId) {
            console.error("Missing productId or userId for review submission");
            return;
        }
        try {
            const response = await axiosClient.post(`/admin/postReview/${productId}`, {
                userId,
                comment: reviewData.comment,
                rating: reviewData.rating,
            });
            console.log("Review posted successfully: ", response.data);
        } catch (error) {
            console.error("Error posting review: ", error);
        }
    }

    return{ postAReview, reviewData, setReviewData }
}