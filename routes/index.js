
const express = require("express")

const router = express.Router()

router
	.get("/", (req, res) => {
		res.render("index", {
			partials: {header: "header"}
		})
	})

module.exports = router
