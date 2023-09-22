import express from "express";
import cors from "cors";
import { Db, MongoClient, ObjectId } from "mongodb";

const PORT = 5050;
const app = express();
const client = new MongoClient("mongodb://localhost:27017");
let db;

app.use(cors());
app.use(express.json());

app.get("/description", (req, res) => {
  const query = {};
  const text = req.body.text;
  query[text] = { $exist: true };
  db.collections("ds").find(query);
});

//MongoDB Connection
async function start() {
  client
    .connect()
    .then(() => {
      console.log("Connected successfully to server");
      db = client.db("buttonDescription");
      app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
      });
    })
    .catch(() => {
      console.log("error connecting to mongoDB!");
    });
}

start();
