const express = require("express")
const app = express()
app.listen("4444")
app.use(express.static("node_modules"))
app.use(express.static("public"))