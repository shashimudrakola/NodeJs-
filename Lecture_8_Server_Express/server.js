import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("you requested for home page");
});
app.get("/srk", (req, res) => {
  res.send("you requested for information about srk");
});

const port = 3000;

app.listen(port, () => console.log(`server is running at port : ${port}`));
