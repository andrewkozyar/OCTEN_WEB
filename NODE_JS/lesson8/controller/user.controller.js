const fs = require('fs-extra').promises;

const { emailActionsEnum } = require('../constant');
const { emailService, fileService, userService } = require('../service');
const {
    errorCodesEnum, errorMessagesEnum, responseCodesEnum, responseMessagesEnum: { userResponse }
} = require('../constant');
const { passwordHasher } = require('../helper');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { userID } = req.params;

            const user = await userService.findSingleUser(userID);

            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { body: { password, email }, avatar } = req;
            const hashPassword = await passwordHasher.hash(password);

            const user = await userService.createUser({ ...req.body, password: hashPassword });

            if (avatar) {
                const { finalPath, uploadPath, dirPath } = fileService.pathDirBuilder(avatar.name, user._id, 'photos', 'user');

                await fs.mkdir(dirPath, { recursive: true });
                await avatar.mv(finalPath);

                await userService.updateUserById(user._id, { avatar: uploadPath });
            }

            await emailService.sendMail(email, emailActionsEnum.WELCOME, { userName: email });

            res.status(responseCodesEnum.CREATED).json(userResponse.create);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userID, email } = req.params;

            if (userID !== req.user._id.toString()) {
                throw new Error(errorMessagesEnum.unauthorized);
            }

            await userService.deleteUser(userID);

            await emailService.sendMail(email, emailActionsEnum.GOODBYE, { userName: email });

            res.status(responseCodesEnum.DELETED).json(userResponse.delete);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
