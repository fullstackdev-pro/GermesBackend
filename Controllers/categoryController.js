// categoriyani yukash
const Category = require("../model/CategoryModel");

//  post metodi
const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    const categories = await Category.find();
    res.status(201).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.send(error);
  }
};

//  delete metodi
const deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndDelete({
      name: req.params.name,
    });
    const categories = await Category.find();
    res.status(201).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.send(error);
  }
};

//  o'zgartirsh metodi
const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findOneAndUpdate(
      { name: req.params.name },
      { name: req.body.name }
    );
    res.status(201).json({
      succes: true,
      updated,
    });
  } catch (error) {
    res.send(error);
  }
};

//  get metodi
const findCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      succes: true,
      object: categories,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addCategory, deleteCategory, findCategory, updateCategory };
