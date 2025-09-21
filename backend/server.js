const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(express.json());

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// DB Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Server
<<<<<<< HEAD
const PORT = 1000;
=======
const PORT = 9000;
>>>>>>> 8925e1a78a05c8fb534a9f19ccafbd35a33fdb74
app.listen(PORT, () => 
  {
    
    console.log(`🚀 Server has started running on port ${PORT}`)
  });
