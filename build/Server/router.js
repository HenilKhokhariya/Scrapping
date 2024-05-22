const express = require("express");
const controler = require("./controler");

const router = express.Router();

router.get("/", controler.Home);
router.post("/data", controler.Data);
router.post("/DataInsert", controler.DataInsert);

module.exports = { router };
