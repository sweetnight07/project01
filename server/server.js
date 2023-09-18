import express from "express";
import cors from "cors";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/sad", (req, res) => {
  res.json("COPY SIR");
  console.log(req);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
