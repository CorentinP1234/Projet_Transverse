const express = require('express')
const app = express()


app.get("/api", (req, res) => {
  let message = {"users": ["userOne", "userTwo", "userThree"]}
  console.log(`Sending ${message}`)
  res.json(message)
})

app.listen(5000, () => {console.log("Server started on port 5000")})