const { Schema, model } = require("mongoose");

const goodsSchema = new Schema(
  {
    idCode: { type: Number, required: true },
    title: { type: String, required: true },
    incomePrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    remainder: {type:Number, required: true},
    status: String,
    category: { type: String},
    info: String,
    photo: String,
    catalog: String,
    manufacturer: String,
    brand: String,
    size: String,
    weight: Number,
    watersupply: Number,
    frostresistant: Number,
    consumption: Number,
    quantitypallet: Number,
    quantitycar: Number,
    color: String,
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Goods',goodsSchema)