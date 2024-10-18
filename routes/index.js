const router = require("express").Router();
const metrics = require("./metrics");
const kpis = require("./kpis");

router.use("/kpis", kpis);
router.use("/metrics", metrics);

router.get("/", function (req, res) {
  res.status(200).send("Telco App is running 🥳");
});

module.exports = router;