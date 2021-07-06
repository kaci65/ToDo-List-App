const express = require("express");
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server up and learning. Node.js api listening from ${port}`);    
}); 