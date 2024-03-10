const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const urlDB = "mongodb+srv://Ismoil:V8zDpnkETsmDX3E@germes.vexn0nc.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    const connectDB = await mongoose.connect(urlDB, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = connect
