const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

require("dotenv").config();

router.post("/sendMail", async (req, res) => {
  try {
    const formData = req.body.formData;
    // console.log(formData);

    const MAIL_USER = "testxnodemailer@gmail.com"
    const MAIL_PASSWORD = "dxyx qyjo optu qult"

    // validation done in frontend

    // Create a transporter object using Gmail service
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: MAIL_USER, // Your Gmail address
        pass: MAIL_PASSWORD, // Your Gmail password or App Password
      },
    });

    // Setup email data
    let mailOptions = {
      from: `${MAIL_USER}`, // Sender's email
      to: formData.email, // Receiver's email from request body
      subject: "Hello from RD const !", // Subject from request body
      text: "We got your message, out team will contact you soon!!!", // Plain text body
      // HTML body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    // dxyx qyjo optu qult : app pass
    return res.status(200).json({
      success: true,
      message: "Mail sent",
    });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error in sending mail : " + err.message,
    });
  }
});

module.exports = router;
