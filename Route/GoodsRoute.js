const router = require("express").Router();
const {
  createGoods,
  updateGoods,
  deleteGoods,
  findOne,
  findWithCategory,
  findAll,
} = require("../Controllers/goodsController");

// Tovar qo'shish
router.post("/admin/product", createGoods);

// Tovarni o'zgartirish
router.put("/admin/update/product/:id", updateGoods);

// Tovar o'chirish
router.delete("/admin/delete/:id", deleteGoods);

// Barcha tovarni olish
router.get("/goods", findAll);

// Home uchun tovar olish
router.get("/home", findWithCategory);

// Bitta tovarni olish
router.get("/product/:id", findOne);

module.exports = router;
