import Router from "express";
import { MongoClient } from "mongodb";

const MONGOURL = process.env.MONGO_URL;
const client = new MongoClient(MONGOURL);

const router = Router();

router.get("/", async (req, res) => {
  try {
    await client.connect();

    const documents = client.db("emoji_riddle").collection("leaderboard");
    const leaderboardArray = await documents.find({}).sort({score: -1}).toArray();

    res.status(200).json(leaderboardArray);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    client.close();
  }
});

export default router;
