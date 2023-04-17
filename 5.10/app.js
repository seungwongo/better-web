const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작 되었습니다.");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.all("*", (req, res) => {
  res.sendFile(__dirname + "/app.html");
});
