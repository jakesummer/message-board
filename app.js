import express from "express";
import path from "node:path";
import process from "node:process";
import fs from "node:fs";
import indexRouter from "./routes/indexRouter.js";

if (fs.existsSync(".env")) {
  process.loadEnvFile();
}

const app = express();
const __dirname = import.meta.dirname;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use((req, res) => {
  res.status(404).render("error", {
    statusCode: "404",
    errorMessage: `The requested URL: ${req.path} was not found!`,
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("error", {
    statusCode: 500,
    errorMessage: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${PORT}`);
});
