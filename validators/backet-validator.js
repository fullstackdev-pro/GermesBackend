const Joi = require("joi");

function validateBacket(user) {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    userId : Joi.array(),
  });
  return schema.validate(user);
}

module.exports = validateBacket;