import express from "express";
import cors from "cors";
import riddles from "./routes/riddles.js";

const PORT = process.env.PORT || 8000;

const app = express();
// Enable CORS
app.use(cors());
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/riddles", riddles);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
