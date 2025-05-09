const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

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

// Register School Route
app.post("/register-school", async (req, res) => {
  const {
    schoolName,
    registrationNumber,
    schoolType,
    affiliation,
    state,
    district,
    city,
    pincode,
    photo,
  } = req.body;

  if (!schoolName || !registrationNumber) {
    return res.status(400).json({
      error: "School name and registration number are required",
      received: {
        schoolName: !!schoolName,
        registrationNumber: !!registrationNumber,
      },
    });
  }

  try {
    // 🔍 Check if a school with the same registration number exists
    const checkQuery = `
      SELECT * FROM registration WHERE registration_number = $1
    `;
    const checkResult = await pool.query(checkQuery, [registrationNumber]);

    if (checkResult.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "A school with this registration number already exists.",
        existingSchool: checkResult.rows[0],
      });
    }

    const query = `
      INSERT INTO registration (
        school_name, registration_number, school_type, affiliation, state,
        district, city, pincode, photo ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;

    const values = [
      schoolName,
      registrationNumber,
      schoolType,
      affiliation,
      state,
      district,
      city,
      pincode,
      photo,
    ];

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: "School registered successfully",
      data: result.rows[0],
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({
      error: "Failed to register school",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

app.get("/retrieveschool", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT school_name, registration_number, city , photo FROM registration ORDER BY school_name ASC"
    );

    res.status(200).json({
      data: result.rows,
      status: "success",
      message: "School names retrieved successfully",
    });
  } catch (err) {
    console.error("❌ Error retrieving school names:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to retrieve school names",
    });
  }
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  pool.end(() => {
    console.log("🛑 PostgreSQL pool has ended");
    process.exit(0);
  });
});