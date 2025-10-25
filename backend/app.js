import express, { urlencoded } from "express";
import { env } from "./config/env.js";
import Todo from "./config/db.js";
import cors from "cors";

const app = express();

app.use(cors());
// app.use(express({ urlencoded: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const readData = await Todo.find();
  res.send(readData);
});

app.post("/add-todo", async (req, res) => {
  try {
    const { task, status } = req.body;

    const checkTaskAlreadyAdded = await Todo.findOne({ task });

    if (checkTaskAlreadyAdded) {
      return res.status(400).json({ message: "Task already exists" });
    }

    const newTask = await Todo.insertOne({ task, status });

    res.status(201).json({ message: "Task added", data: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    
    const deletedTask = await Todo.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
