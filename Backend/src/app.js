const express = require("express");

const app = express();

app.get("/", (req, res) => res.status(200).send("Ola mundo"));

module.exports = app;
