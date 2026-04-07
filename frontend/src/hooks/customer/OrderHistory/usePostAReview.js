import { useState } from "react";
import axiosClient from "../../../utils/axiosClient";

export default function usePostAReview() {
    const [ reviewData, setReviewData ] = useState({
        productId: '',
        rating: 1,
        comment: ''
    })

    const postAReview = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post('/admin/postReview', {...reviewData});
            return response.data;
        } catch (error) {
            console.error("Error posting review: ", error);
            throw error;
        }
    }

    return{ postAReview, reviewData, setReviewData }
}