import express from "express";
import riddles from "./routes/riddles.js";

const PORT = process.env.PORT || 8000;

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/riddles", riddles);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
