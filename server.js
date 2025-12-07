import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
import BearerStrategy from "passport-http-bearer";

const token = "USER123TOKEN"; // must match OAUTH_TOKEN
const apiKey = "APIKEY123456"; // must match API_KEY

import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
// Add this before your routes
app.use(cors({
  origin: "*" // allows all origins, you can replace "*" with your frontend URL
}));




// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Mongo Schema
const RecordSchema = new mongoose.Schema({
  country: String,
  covidStats: Object,
  weatherDetails: Object,
  countryMetadata: Object,
  createdAt: { type: Date, default: Date.now }
});
const Record = mongoose.model("Record", RecordSchema);

// OAuth Strategy
passport.use(new BearerStrategy(
  function (token, done) {
    if (token === process.env.OAUTH_TOKEN) {
      return done(null, true);
    }
    return done(null, false);
  }
));

// API KEY Middleware
function apiKeyCheck(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: "Invalid API Key" });
  }
  next();
}

// Save API
app.post("/api/save",
  apiKeyCheck,
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {

    try {
      const record = new Record(req.body);
      await record.save();
      res.json({ message: "Data stored successfully!", record });
    } catch (err) {
      res.status(500).json({ error: "Error saving data", details: err });
    }
  }
);

// Retrieve API
app.get("/api/records", async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

app.listen(5000, () => console.log("Server running on port 5000"));

