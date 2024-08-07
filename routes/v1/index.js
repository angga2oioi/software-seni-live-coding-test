// @ts-check

const express = require("express");
const router = express.Router();

router.use("/utils", require("./utils"));
router.use("/repos", require("./repos"));
module.exports = router;
