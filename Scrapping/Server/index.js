require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const r = require("./router");
const Path = require("path");
const PORT = process.env.PORT;
const connectDb = require("./connection");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "POST,GET,PUT,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", r.router);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

connectDb().then((res) => {
  app.listen(PORT, (res) => {
    console.log("SERVER START");
  });
});
