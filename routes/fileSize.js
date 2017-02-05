
const express = require("express")
const multer = require("multer")

const upload = multer( {dest: "uploads/" } )
const router = express.Router()

router
	.post("/", upload.single('input-files'), (req, res) => {
		var fileSize = {
			size: req.file.size
		}
		res.json(fileSize).end()
	})

module.exports = router