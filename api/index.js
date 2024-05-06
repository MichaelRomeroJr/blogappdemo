const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts")

dotenv.config();
app.use(express.json());

console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err)=>console.log(err));

app.use("/api/posts", postRoute)

app.listen("5000", ()=>{
    console.log("Backend is running...")
});