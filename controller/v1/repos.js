//@ts-check
const { listGithubRepos } = require("../../service/repos");
const { UNKNOWN_ERR_CODE, UNKNOWN_ERR_MESSAGE, SUCCESS_ERR_CODE, SUCCESS_ERR_MESSAGE } = require("../../utils/constant");


module.exports = {
    async ListGithubRepos(req, res) {
        try {

            let data = await listGithubRepos()
            res.status(200).json({
                error: SUCCESS_ERR_CODE,
                message: SUCCESS_ERR_MESSAGE,
                data,
            });
        } catch (e) {
            console.log(e);
            res.status(UNKNOWN_ERR_CODE).json(e.message || UNKNOWN_ERR_MESSAGE);
        }
    },
}