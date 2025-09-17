import express from "express";
import { env } from "./config/env.js";
import Todo from "./config/db.js";
import cors from "cors" 

const app = express();

app.use(cors());


app.get("/" , async (req,res) => {
    const readData = await Todo.find();
    res.send(readData)
})


app.listen(env.PORT , () => {
    console.log(`Server is running on port ${env.PORT}`);
})



