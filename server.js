
const bodyParser = require("body-parser")
const express = require("express")

const index = require("./routes/index")
const api = require("./routes/api")

const app = express()

var port = process.env.PORT || 3000

app
	.set("view engine", "hjs")
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use("/", index)
	.use("/api", api)
	/*.get("*", (req, res) => {
		res.redirect("/")
	})*/
	.listen(port)

