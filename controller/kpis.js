const { response, request } = require("express");
const { dbConfig, table } = require("../database/config");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let sql = require("mssql");

const kpiPOST = (req = request, res = response) => {
    res.status(200).json({ message: "API POST is connected" });
};


module.exports = {
    kpiPOST,
};