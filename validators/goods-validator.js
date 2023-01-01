const Joi = require("joi");

function validateGoods(goods) {
  const schema = Joi.object().keys({
    idCode: Joi.number().required(),
    title: Joi.string().required(),
    incomePrice: Joi.number().required(),
    salePrice: Joi.number().required(),
    remainder: Joi.number().required(),
    status: Joi.string().allow(''),
    category: Joi.string().allow(''),
    photo: Joi.string().allow(''),
    info: Joi.string().allow(''),
    catalog: Joi.string().allow(''),
    manufacturer: Joi.string().allow(''),
    brand: Joi.string().allow(''),
    size: Joi.string().allow(''),
    weight: Joi.number().allow(''),
    watersupply: Joi.number().allow(''),
    frostresistant: Joi.number().allow(''),
    consumption: Joi.number().allow(''),
    quantitypallet: Joi.number().allow(''),
    quantitycar: Joi.number().allow(''),
    color: Joi.string().allow(''),
  });
  return schema.validate(goods);
}

module.exports = validateGoods;