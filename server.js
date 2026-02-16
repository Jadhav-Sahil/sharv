const express = require("express");
const path = require("path");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("home");
});
app.get("/yes", (req, res) => {
    res.render("yes");
});

app.get("/no", (req, res) => {
    res.render("no");
})
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("sharv");
});
