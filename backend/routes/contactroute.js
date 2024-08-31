const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
    console.log("enter in contact sec");
    try {
        const { name, email, phone, message } = req.body.data;
        console.log("details fetched", req.body, name, email, phone, message);
        if (!name || !email || !phone || !message) {
            return res.status(401).json({
                success: false,
                mesaage: "Fill All feild"
            })
        }
        console.log("validate");
        const details = await Contact.create({
            name, email, phone, message
        });
        console.log(details);
        return res.status(200).json({
            success: true,
            mesaage: "Details Received"
        })
    } catch (e) {
        return res.status(401).json({
            success: false,
            mesaage: "Something went wrong"
        })
    }
})
router.get("/find", async (req, res) => {
    try {
        const details = await Contact.find({});
        console.log(details);
        return res.status(200).json({
            success: true,
            mesaage: "Received",
            details,
        })
    } catch (e) {
        return res.status(400).json({
            success: false,
            mesaage: "Something Went Wrong",
        })
    }
})
module.exports = router;