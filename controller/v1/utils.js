// @ts-check

const { SUCCESS_ERR_CODE, SUCCESS_ERR_MESSAGE, UNKNOWN_ERR_MESSAGE, UNKNOWN_ERR_CODE } = require("../../utils/constant");


module.exports = {

    async UtilsGetServerStatus(req, res) {
        try {

            res.status(200).json({
                error: SUCCESS_ERR_CODE,
                message: SUCCESS_ERR_MESSAGE,
                data: {
                    live: true
                },
            });
        } catch (e) {
            console.log(e);
            res.status(UNKNOWN_ERR_CODE).json(e.message || UNKNOWN_ERR_MESSAGE);
        }
    },
};
