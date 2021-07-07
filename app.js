const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');
//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}, () => {
        console.log("DB connected ;)");
        app.listen(3000, () =>
            console.log("Server up and running! :)"));
    });

app.use("/static", express.static("public"));
app.use(express.urlencoded({extended: true}));

// view engine config
app.set("view engine", "ejs");

// GET
app.get("/", (req, res) => {
    res.render("todo.ejs");
});

// POST
app.post("/", (req, res) => {
    console.log(req.body);
});