import express from "express"
import config from "./config.js"

//express = require("express");

const app = express();

//settings
app.set('port', config.port)
export default app;