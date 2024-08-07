// @ts-check

const express = require("express");
const { ListGithubRepos } = require("../../controller/v1/repos");
const router = express.Router();

router.get(
    "/",
    ListGithubRepos
);
module.exports = router;
