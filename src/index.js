const express = require("express");
const cors = require("cors");
const { register, login } = require("./controllers/auth.controller");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", register);
app.post("/login", login);

module.exports = app;
