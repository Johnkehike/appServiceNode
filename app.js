// app.js
const express = require("express");
const app = express();
// const path = require("path");
const usersRouter = require("./routes/usersRouter");

// app.set("views", __dirname + "/src");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views" ));
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

// app.use(express.static(path.join(__dirname, "src")));
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "src", "index.html"));
// });


const PORT = process.env.PORT || 3800;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
