const router = require("express").Router();
const metrics = require("./metrics");

router.use("/metrics", metrics);

router.get("/", function (req, res) {
  res.status(200).send("Telco App is running 🥳");
});

module.exports = router;