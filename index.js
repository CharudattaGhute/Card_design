const express = require("express");

PORT = 4000;

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("Server  loading http://localhost:4000");
});
