const api_key = process.env.api_key

const isAuthorized = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey)
        return res.status(400).json({ message: 'Api key missing' })

    if (apiKey!== api_key) {
        return res.status(400).json({
            message: 'Not Authorized'
        })
    }
    next()
}

module.exports = { isAuthorized }