const express = require("express");
const http = require("http");

const app = express();

app.set("port", 8000);

// app.use를 사용해서 데이터를 받아옴
// app.use(function (req, res) {

// });

app.use(express.static(__dirname + "/workspace"));

http.createServer(app).listen(app.get("port"), function () {
    console.log(`express server on : ${app.get("port")}`);
});
