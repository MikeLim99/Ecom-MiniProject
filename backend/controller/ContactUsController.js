import FeedBackModel from "../model/FeedBackModel.js";

export const submitFeedBack = async (req, res) => {
    const { firstname, lastname, email, phoneNumber, message } = req.body;

    try {
        const newFeedBack = new FeedBackModel({
            firstname,
            lastname,
            email,
            phoneNumber,
            message
        });
        const savedFeedBack = await newFeedBack.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: savedFeedBack });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
}