const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET;

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

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
