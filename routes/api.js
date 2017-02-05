
const express = require("express")
const multer = require("multer")
const upload = multer( {dest: "uploads/" } )

//const fileSize = require("../routes/fileSize")

const router = express.Router()

router
	.get("/", (req, res) => {
		res.render("api", {
			partials: {header: "header"}
		})
	})
	.post("/file-size", upload.single('input-files'), (req, res) => {
		console.log(req.file)
		res.send("OK")
	})

module.exports = router