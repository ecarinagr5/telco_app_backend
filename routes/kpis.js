const router = require("express").Router();
const {
    kpiPOST,
} = require("../controller/kpis");

router.post("/", kpiPOST);


module.exports = router;