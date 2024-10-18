const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

app.set("port", process.env.PORT || 8081);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${app.get("port")} `);
});

app.post("/user/generateToken", (req, res) => {
  // Validate User Here
  // Then generate JWT Token

  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };
  const token = jwt.sign(data, jwtSecretKey);

  res.send(token);
});

app.get("/user/validateToken", (req, res) => {
  // Tokens are generally passed in the header of the request
  // Due to security reasons.

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});

app.get("/health", (req, res) => {
  res.status(200).send("API Leads is Available");
});

// Export the Express API
module.exports = app;