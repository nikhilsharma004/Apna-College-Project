const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engien", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) =>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json");
    let { userName } = req.params;
    const data = instaData[userName];
    console.log(data);
    res.render("instagram.ejs", { data });
    
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 7);
    res.render("rolldice.ejs", {diceVal});
});

app.listen(port, ()=>{
    console.log(`port is listing on ${port}`);
});
