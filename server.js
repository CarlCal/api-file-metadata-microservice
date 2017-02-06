
const bodyParser = require("body-parser")
const express = require("express")

const api = require("./routes/api")
const index = require("./routes/index")

const staticAssets = __dirname + "/public"

const app = express()

var port = process.env.PORT || 3000

app
	.set("views", __dirname+"/views")
	.set("view engine", "hjs")
	.use(express.static(staticAssets))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use("/", index)
	.use("/api", api)
	.get("*", (req, res) => {
		res.redirect("/")
	})
	.listen(port)

