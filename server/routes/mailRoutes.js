const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

require("dotenv").config();

// contact mails
router.post("/sendMail", async (req, res) => {
  try {
    const formData = req.body.formData;

    // Create transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // Your Gmail address
        pass: process.env.MAIL_PASSWORD, // Your Gmail password or App Password
      },
    });

    // Setup email data
    let mailOptions = {
      from: `${process.env.MAIL_USER}`,
      to: formData.email,
      subject: "Hello from RD const !",
      text: "We got your message, out team will contact you soon!!!",
    };

    let info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Mail sent",
    });
  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Error in sending mail : " + err.message,
    });
  }
});

// career mails
router.post("/sendCareerMail", async(req,res) => {
  try
  {
    const formData = req.body.formData

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASSWORD, 
      },
    });

    let mailOptions = {
      from: `${process.env.MAIL_USER}`,
      to: formData.email,
      subject: "Hello from RD const !",
      text: "We got your message, out team will contact you soon!!!",
      attachchments: [{
        filename:'resume.pdf',
        path:`${formData.filePath}`
      }]
    };

    let info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Mail sent",
    });

  }
  catch(err)
  {
    return res.status(500).json({
      success: false,
      message: "Error in sending mail : " + err.message,
    });
  }
})

module.exports = router;
