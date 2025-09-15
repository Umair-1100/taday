import mongoose from "mongoose";
import chalk from 'chalk'


try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(chalk.bgRed.white("Connected to MongoDB Atlas!"));
} catch (error) {
    console.error("Error connecting:", error.message);
}


const todoSchema = new mongoose.Schema({
    task: String,
});


const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
