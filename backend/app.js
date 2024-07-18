import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import authenticateUser from "./middlewares/authenticateUser.js";
import Nugget from "./models/nuggetsModel.js";
import asyncHandler from "./middlewares/asyncHandler.js";

// ⚠⚠⚠ Note ⚠⚠⚠
// If you're a developer viewing this code in my repository, please make sure to create your own .env file with the necessary environment variables as it is not provided in this repository.

// env variables configuration
dotenv.config();

// App Configuration
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configurations
app.use(
  cors({
    origin: true, // Allow requests from any origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Optional: Add a middleware to handle specific origins if needed
// app.use((req, res, next) => {
//   const allowedOrigins = ["http://localhost:8080", "https://yourdomain.com"];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   next();
// });

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/incomes", authenticateUser, incomeRoutes);
app.use("/api/v1/expenses", authenticateUser, expenseRoutes);





const addnuggets = asyncHandler(async (req, res) => {
  const { score } = req.body;
  const userId = req.user._id;

  // Find the nugget for the given user
  let nugget = await Nugget.findOne({ user: userId });

  if (nugget) {
    // If nugget exists, add the score
    nugget.score += score;
  } else {
    // If nugget does not exist, create a new one
    nugget = new Nugget({
      user: userId,
      score,
    });
  }

  // Save the nugget
  await nugget.save();

  return res.status(201).json({ message: "Score updated successfully", score: nugget.score });
});
app.use("/api/v1/addnuggets", authenticateUser, addnuggets);


const getnuggets = asyncHandler(async (req, res) => {

  const userId = req.user._id;

  // Find the nugget for the given user
  let nugget = await Nugget.findOne({ user: userId });

  if(!nugget){
    nugget = new Nugget({ user: userId }); 
    nugget.save();
  }

  return res.status(201).json({ message: "Get Scores Successfully", score: nugget.score });
});
app.use("/api/v1/getnuggets", authenticateUser, getnuggets);


app.post('/api/v1/deductNuggets', async (req, res) => {
  const { amount } = req.body;

  try {
    // Assuming you have a User model with nuggets stored
    // Fetch user and update nuggets
    const user = await Nugget.findOneAndUpdate(
      { user: req.user.id }, // Replace with actual user identification method
      { $inc: { score: -amount } }, // Deduct amount from score
      { new: true }
    );

    // Respond with updated user data (optional)
    res.json({ message: `Deducted ${amount} nuggets successfully`, user });
  } catch (err) {
    console.error('Error deducting nuggets:', err);
    res.status(500).json({ error: 'Could not deduct nuggets' });
  }
});

// Start Server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}!`);
    });
  } catch (error) {
    console.log(`Error in starting the server: ${error.message}`);
    process.exit(1);
  }
};

startServer();