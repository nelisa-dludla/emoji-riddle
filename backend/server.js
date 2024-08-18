import express from "express";
import cors from "cors";
import riddles from "./routes/riddles.js";
import leaderboard from "./routes/leaderboard.js";

import { auth } from 'express-openid-connect';
import pkg from 'express-openid-connect';

const { requiresAuth } = pkg;

const PORT = process.env.PORT || 8000;
const SECRET = process.env.SECRET;
const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER = process.env.ISSUER;
const BASE_URL = process.env.BASE_URL;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: BASE_URL,
  clientID: CLIENT_ID,
  issuerBaseURL: ISSUER
};

const app = express();
// Enable CORS
app.use(cors());
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Emoji Riddle's Backend!" });
});
app.use("/api/riddles", riddles);
app.use("/auth", auth);
app.use("/leaderboard", leaderboard);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
