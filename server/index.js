const express = require("express")
require("dotenv").config()
const colors = require("colors")
const port = process.env.PORT || 5000
const { createHandler } = require("graphql-http/lib/use/express")
const schema = require("./schema/schema")
const connectDB = require("./config/db")

connectDB()

const app = express()
app.all("/graphql", createHandler({ schema }))

app.listen(port, console.log(`Server running on port ${port}`))
