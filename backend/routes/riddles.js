import Router from "express";
import { MongoClient } from "mongodb";

const MONGOURL = process.env.MONGO_URL;
const client = new MongoClient(MONGOURL);

const router = Router();

router.get("/", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const collection = client.db("emoji_riddle").collection("riddles");
    const riddlesArray = await collection.find({}).toArray();

    const riddlesObject = riddlesArray.reduce((acc, riddle) => {
      acc[riddle._id] = riddle;
      return acc;
    });

    res.status(200).json(riddlesObject);
  } catch (error) {
    console.log("Connection error: ", error);
  } finally {
    client.close();
  }
})



export default router;
