const router = require("express").Router();
const {
  addCategory,
  deleteCategory,
  findCategory,
  updateCategory,
} = require("../Controllers/categoryController");

router.post("/admin/category", addCategory);

router.delete("/admin/category/:name", deleteCategory);

router.put("/admin/category/:name", updateCategory);

router.get("/home/categories", findCategory);

module.exports = router;
