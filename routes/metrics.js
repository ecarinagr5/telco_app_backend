const router = require("express").Router();
const {
  metricsGet,
} = require("../controller/metrics");



router.get("/", metricsGet);


module.exports = router;