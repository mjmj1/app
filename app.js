const express = require("express");

const app = express();

// app.use를 사용해서 데이터를 받아옴
// app.use(function (req, res) {

// });

app.use(express.static(__dirname + "/workspace"));

app.listen(8080, function () {
    console.log(`express server on : 8080`);
});
