import router from "./routes"

const express = require("express")

const app = express()
app.use(router)

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000")
})
