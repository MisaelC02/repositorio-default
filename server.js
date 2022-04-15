const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const sessions = sessions("sessions");
const port = 2500;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "",
});

db.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("concetado al servidor con el id" + db.threadId);
});

app.get("/", (req, res) => {
    res.render("File");
    //res.render("pruebas", { p : p});
});

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
