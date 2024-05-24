const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.APP_PASS,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/email", async (req, res) => {
  const { name, email, tel, message, date } = req.body;

  const mail = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: "New Contact Form Submission",
    text: `
      From: ${name}
      Email: ${email}
      Phone: ${tel}
      Date: ${date}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mail);
    res.json({ status: "success" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ status: "fail", error: err.message });
  }
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
