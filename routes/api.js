
const express = require("express")
const multer = require("multer")

const upload = multer()

const router = express.Router()

router
	.get("/", (req, res) => {
		res.render("api", {
			partials: {header: "header"}
		})
	})
	.post("/file-size", upload.single('input-files'), (req, res) => {
		var fileSize = {
			size: req.file.size
		}
		res.json(fileSize).end()
	})

module.exports = router