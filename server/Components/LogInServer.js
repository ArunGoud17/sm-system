const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// PostgreSQL Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Connect
pool
  .connect()
  .then(async (client) => {
    console.log("✅ Connected to PostgreSQL!");
  })
  .catch((err) => {
    console.error("❌ PostgreSQL connection error:", err);
    process.exit(1);
  });

app.post("/Rolelogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM admin WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) {
      throw new Error("invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      //jwt token
      const token = await jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      res.status(200).json({
        success: true,
        token,
        message: "login successful",
      });
    } else {
      throw new Error("invalid credentials");
    }
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

app.get("/profile", (req, res) => {
  const cookies = req.cookies;
  const { token } = cookies;
  const decoedMsg = jwt.verify( token, process.env.JWT_SECRET );
  const { email }=decoedMsg;
  
  console.log(decoedMsg);
  console.log(cookies);
  res.send("reading cooies");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  pool.end(() => {
    console.log("🛑 PostgreSQL pool has ended");
    process.exit(0);
  });
});