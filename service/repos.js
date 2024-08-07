const axios = require('axios')
exports.listGithubRepos = async () => {

    let { data } = await axios.get('https://api.github.com/user/repos', {
        headers: {
            Authorization: `Bearer ${process?.env?.GITHUB_TOKEN}`
        }
    })

    return data?.map((n) => {
        return {
            id: n?.id,
            full_name: n?.full_name,
            git_url: n?.git_url,
            owner_login: n?.owner?.login,
            owner_url: n?.owner?.url
        }
    });

}