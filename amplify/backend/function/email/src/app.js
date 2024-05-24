const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const nodemailer = require("nodemailer");
const cors = require("cors");

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

const allowedOrigins = [
  "https://beachwestdental.com",
  "https://dev.d28l2mrgjucolx.amplifyapp.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    preflightContinue: false,
  })
);

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
