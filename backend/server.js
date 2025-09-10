const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running 🚀");
});

// Connect MongoDB (skip if you don’t have MongoDB yet)
mongoose.connect(
    "mongodb+srv://expenseUser:My%40123@expense-tracker.tyegows.mongodb.net/?retryWrites=true&w=majority&appName=expense-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
