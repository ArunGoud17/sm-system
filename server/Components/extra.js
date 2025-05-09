const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

/**
 * 🟢 Retrieve All Registered Schools
 */
app.get("/Adminlogin", async (req, res) => {
  try {
    const result = await pool.query("SELECT username, password FROM admin");

    const credentials = {};
    result.rows.forEach((row) => {
      credentials[row.username] = row.password;
    });

    console.log(credentials);
    res.status(200).json({
      data: credentials,
    });
  } catch (err) {
    console.error("❌ Error retrieving username and password:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve username and password",
    });
  }
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







const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/secure-data", authenticateToken, (req, res) => {
  res.json({
    data: "This is protected data only for logged-in users",
    user: req.user,
  });
});

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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  try {
    const result = await pool.query("SELECT * FROM admin WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const dbPassword = result.rows[0].password;
    const isMatch = await bcrypt.compare(password, dbPassword);

    if (isMatch) {
       


    }
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    // 🔑 Generate JWT
    const token = jwt.sign(
      { email: result.rows[0].email, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // optional expiry
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token, // send token to frontend
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/profile",async(req,res)=>{
   
  const cookie=req.cookies()
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];XMLDocument
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user; // user info from token
    next();
  });
}

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
