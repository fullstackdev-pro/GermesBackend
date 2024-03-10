
// userni yuklash
const User = require("../model/UserModel");

// validatsiya qilish
const validateUser = require("../validators/user-validator");

// jwt va bcrypt yuklash
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// register bo'limini tayyorlash
const register = async (req, res) => {
  // inputni validatsiya qilish
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send("Invalid user");
  }

  // dbda email bor yo'qligini tekshirish
  const email = await User.findOne({ email: req.body.email });
  if (email) {
    return res.status(400).send("Email already exist");
  }
  // passwordni hash qilish
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({ ...req.body, password: hashPassword, isAdmin: false });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(`jiddiy xato ${error}`);
  }
};

// login bo'limini tayyorlash
const login = async (req, res) => {
  // email dbda borligini tekshirish
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email or Password is error");
  }

  // password to'g'riligini tekshirish
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Passwod is error");

  // token yaratish
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).send({
    message: "success",
    token: token,
    user: user._id
  });
};

// modullarni eksport qilish
module.exports = { login, register };
