const { response, request } = require("express");
const { dbConfig, table } = require("../database/config");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let sql = require("mssql");

const metricsGet = (req = request, res = response) => {
    res.status(200).json({ message: "API Telco is connected" });
};


module.exports = {
    metricsGet,
};