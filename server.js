const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const http = require('http')
// .env file
dotenv.config();
connectDB()

const port = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(port, ()=>{
  console.log('Server running port:'+port)
})

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./Route/AuthRoute"));
app.use("/api", require("./Route/GoodsRoute"));
app.use("/api", require("./Route/BacketRoute"));
app.use("/api", require("./Route/CategoryRoute"));

