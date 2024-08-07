// @ts-check

const express = require("express");
const { UtilsGetServerStatus } = require("../../controller/v1/utils");
const router = express.Router();

router.get(
    "/status",
    UtilsGetServerStatus
);
module.exports = router;
