const express = require("express");
require("dotenv").config();
const app = express();

const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/yt", (req, res) => {
    res.send("<h1>Youtube hai ye</h1>");
});

app.get("/idk", (req, res) => {
    res.send("I don't know what am I doing rn");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`);
});
