const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extented: true }));
app.use(cors());

app.get("/", (req, res) => {
	res.send("welcome to our server");
});

app.post("/index.html", urlencoded, (req, res) => {
	console.log(req.body.email);
	console.log(req.body.password);
});

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
