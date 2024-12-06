const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

require("dotenv").config();

router.post("/sendMail", async (req, res) => {
  try
  {
    const formData = req.body.formData;

    // validation done in frontend

    // Create a transporter object using Gmail service
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // Your Gmail address
        pass: process.env.MAIL_PASSWORD, // Your Gmail password or App Password
      },
    });


  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error in sending mail : " + e.message,
    });
  }
});
