// Goods Schemani yukash
const Goods = require("../model/GoodsModel");
const validateGoods = require("../validators/goods-validator");

// Tovar yaratish
const createGoods = async (req, res) => {
  console.log(req.body)
  try {
    const { error } = validateGoods(req.body);
    if (error) {
      return res.status(400).send("Please write completely");
    }

    // idCodeli element borligini tekshirish
    const haveProduct = await Goods.find({ idCode: req.body.idCode });
    if (haveProduct.length > 0) {
      return res.status(400).send("Product bor");
    }

    // Tovarni yaratish
    const goods = new Goods(req.body);
    await goods.save();
    let goodsRes = await Goods.find()
    console.log(goodsRes);
    res.status(201).send(
      {
        success: true,
        message: "Item Created",
        goodsRes
      },
    );
  } catch (error) {
    res.send(error);
  }
};

// Tovar o'zgartirish
const updateGoods = async (req, res) => {
  try {
    let id = req.params.id
    let remainder = await Goods.findOne({ idCode: id }).select({
      remainder: 1,
      _id: 0,
    });

    const { error } = validateGoods(req.body);
    if (error) {
      return res.status(400).send("Please write completely");
    }
    
    const updated = await Goods.findOneAndUpdate(
      { idCode: id },
      {
        ...req.body,
        remainder: remainder.remainder + req.body.remainder,
      }
    );

    let goods = await Goods.find()
    res.status(200).json({
      succes: true,
      message: "Muvaffaqiyatli o'zgartirildi",
      goods,
    });
  } catch (error) {
    console.log(error)
    res.send(error);
  }
};

// O'chirish metodi
const deleteGoods = async (req, res) => {
  try {
    let id = Number(req.params.id);
    const deleted = await Goods.findOneAndDelete({ idCode: id });
    res.status(201).json({
      succes: true,
      deleted,
    });
  } catch (error) {
    res.send(error);
  }
};

// Bitta tovarni bazadan olish
const findOne = async (req, res) => {
  try {
    const item = await Goods.findOne({ idCode: req.params.id });

    res.status(201).json({
      success: true,
      item,
    });
  } catch (error) {
    res.send(error);
  }
};

// Maxsus tovarlarni bazadan olish
const findWithCategory = async (req, res) => {
  try {
    const item = await Goods.find({ status: { $exists: true } });
    res.status(201).json({
      succes: true,
      item,
    });
  } catch (error) {
    res.send(error);
  }
};

// Hamma tovarlarni olish
const findAll = async (req, res) => {
  try {
    const item = await Goods.find();
    res.status(201).json({
      succes: true,
      item,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createGoods,
  updateGoods,
  deleteGoods,
  findOne,
  findWithCategory,
  findAll,
};
