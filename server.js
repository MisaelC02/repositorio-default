const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
let mysql = require("mysql");
let bcrypt = require("bcrypt");
let cors = require("cors");
let session = require("express-session");
let creado = false;

const port = 2500;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
    })
);

db = mysql.createConnection({
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

//mostrar todo lo que esta en la BD
// app.get("/#", function (req, res) {
//     let sql = `SELECT * FROM pers`;
//     db.query(sql, function (err, data, fields) {
//         if (err) throw err;
//         res.render("#", { data: data, creado: creado });
//     });
// });

app.get("/inicio", (req, res) => {
    res.render("index", { creado: creado });
});

// app.get("/#", (req, res) => {
//     req.session.destroy(function (err) {
//         creado = false;
//         console.log("Destruido");
//     });
//     res.redirect("#");
// });

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
