const { models: { userModel } } = require('../dataBase');
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

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    }
};
