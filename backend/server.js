const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// DB Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Server
const PORT = 9000;
app.listen(PORT, () => 
  {
    
    console.log(`🚀 Server has started running on port ${PORT}`)
  });
