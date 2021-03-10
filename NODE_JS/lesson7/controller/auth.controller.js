const { models: { userModel, oAuthModel } } = require('../dataBase');
const { passwordHasher, tokenizer } = require('../helper');

module.exports = {
    authUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await userModel.findOne({ email });

            if (!user) {
                throw new Error('NO USER');
            }

            await passwordHasher.compare(password, user.password);

            const tokens = tokenizer();

            await oAuthModel.create({ ...tokens.access_token, user: user._id });

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    }
};
