/* Amplify Params - DO NOT EDIT
	API_BWDSERVER_APIID
	API_BWDSERVER_APINAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const axios = require("axios");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
const allowedOrigins = [
  "https://main.d8en5yfl96eas.amplifyapp.com",
  "http://beachwestdental.com",
];

app.use(function (req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.get("/test", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/test/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.post("/test", async function (req, res) {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET;

  console.log("secretKey", secretKey);

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.status(200).send({ message: "reCAPTCHA verified successfully" });
    } else {
      res.status(400).send({
        message: "reCAPTCHA verification failed",
        error: response.data["error-codes"],
      });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res
      .status(500)
      .send({ message: "Error verifying reCAPTCHA", error: error.message });
  }
});

app.post("/test/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.put("/test", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/test/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.delete("/test", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/test/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
