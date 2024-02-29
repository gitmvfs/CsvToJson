const express = require("express")
const app = express()
const cors = require("cors")

const serverPort = 3000

app.use(cors())
app.use("", uploadRoute)


app.listen(serverPort, () => console.log(`Open server: http://localhost:${serverPort}`))