module.exports = {
    checkAccessTokenMiddleware: (req, res, next) => {
        try {
            const token = req.get('Authorization');
            console.log(token, res, next);
        } catch (e) {
            console.log(e);
        }
    }
};
