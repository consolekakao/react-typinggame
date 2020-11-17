const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "000.000.000.000",
  port: 3306,
  user: "12312123",
  password: "123123",
  database: "12312312",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 2629;

app.listen(port, () => console.log(`Start Node ${port}`));
connection.connect();
app.get("/quize", function (req, res) {
  outdata = [];
  connection.query("select * from word", function (err, rows) {
    try {
      if (err) throw err;
      var i;
      for (i = 0; i < rows.length; i++) {
        var data = {};
        data.idx = encodeURI(rows[i].idx);
        data.quize = encodeURI(rows[i].word);
        outdata.push(data);
      }
    } catch (error) {
      console.error(error);
    }
    res.json(outdata);
  });
});
