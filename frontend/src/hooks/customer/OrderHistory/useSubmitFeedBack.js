import { useState } from "react";
import axiosClient from "../../../utils/axiosClient";

export default function useSubmitFeedBack() {
    const [ feedBackData, setFeedBackData ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const submitFeedBack = async () => {
        try {
            const response = await axiosClient.post('/feedback/submitFeedback', feedBackData);
            console.log(response.data);
            
        } catch (error) {
            console.error('Error submitting feedback:', error);
            
        }
    };

    return { feedBackData, setFeedBackData, submitFeedBack };

}