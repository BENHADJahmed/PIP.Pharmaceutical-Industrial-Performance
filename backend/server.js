import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import router from "./routes/router.js";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use(express.static(path.join(__dirname , 'public')))

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
const conn = await mongoose.connect(
  "mongodb+srv://ahmedmongo848:SoSgTvGqPYFR7GdN@cluster0.so7vzac.mongodb.net/?retryWrites=true&w=majority"
)
console.log('MongoDB Connected:');
}catch (error)
{
  console.log(error);
}
}
connectDB();

app.use(
  cors({
    origin: "*",
  })
);
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });