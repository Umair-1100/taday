import express, { urlencoded } from "express";
import { env } from "./config/env.js";
import Todo from "./config/db.js";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express({ urlencoded: true }));
app.use(express.json());



app.get("/", async (req, res) => {
    const readData = await Todo.find();
    res.send(readData)
})


app.post("/add-todo", (req, res) => {
    console.log(req.body);
})

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
})



