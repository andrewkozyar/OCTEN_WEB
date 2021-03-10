const Joi = require('joi');

const { regexpEnum } = require('../../constant');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    email: Joi
        .string()
        .regex(regexpEnum.EMAIL_REGEXP)
        .required(),
    password: Joi
        .string()
        .regex(regexpEnum.PASSWORD_REGEXP)
        .required(),
    cars: Joi
        .array()
        .items(
            Joi
                .string()
                .alphanum()
                .min(24)
                .max(24)
        ),
    age: Joi
        .number()
        .integer()
        .min(6)
        .max(99)
});
