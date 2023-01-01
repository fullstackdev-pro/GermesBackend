const router = require("express").Router();
const {
  changeGoods,
  findGoodsFromBacket,
} = require("../Controllers/backetController");

router.post("/category", changeGoods);

router.delete("/category/:id", changeGoods);

router.get("/category", findGoodsFromBacket);

router.put("/category", changeGoods);

module.exports = router;