const Backet = require("../model/BacketModel");
const validateBacket = require("../validators/backet-validator");

const changeGoods = async (req, res) => {
  try {
    const { error } = validateBacket(req.body);
    if (error) {
      return res.status(400).send({ message: "Invalid backed" }, req.body);
    }
    const goods = backet.find({ userId });
    if (!goods) {
      const backet = new Backet({
        userId: req.body.userId,
        goods: req.body.goods,
      });
      await backed.save();
      res.status(201).send(
        {
          message: "Ok",
        },
        backet.userId,
        backet.goods
      );
    } else {
      await Backet.findOneAndUpdate(
        req.body.userId,
        {
          goods: req.body.goods,
        },
        { new: false }
      );
      const updated = await Goods.find(req.body.userId);
      res.status(201).json({
        succes: true,
        updated,
      });
    }
  } catch (error) {}
};

const findGoodsFromBacket = async (req, res) => {
  try {
    const item = await Goods.find({ userId: req.body.userId });
    res.status(201).json({
      succes: true,
      item,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  changeGoods,
  findGoodsFromBacket,
};
