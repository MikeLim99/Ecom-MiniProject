import express from "express";
import { submitFeedBack } from "../controller/ContactUsController.js";

const router = express.Router();

router.post('/submitFeedback', submitFeedBack);

export default router;