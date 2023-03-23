const express = require('express')
const app = express()

const indexRouter = require('./routes/mission')
const loginRouter = require('./routes/login')


app.get("/api", (req, res) => {
  let message = {"users": ["userOne", "userTwo", "userThree"]}
  console.log(`Sending ${message}`)
  res.json(message)
})
app.use('/', missionRouter)
app.use('/login', loginRouter)

app.listen(5000, () => {console.log("Server started on port 5000")})


const { Sequelize, connection } = require("./db.connection")


// Create tables
const Compte = require("./models/compte.model")(connection, Sequelize);
const Mission = require("./models/mission.model")(connection, Sequelize);

// Prevent DeadLock (Session is link to User)
// Compte.sync({ force: false, alter: true })
//   .then(() => {
//     Session.belongsTo(User); // must wait User finish 
//     Session.sync({ force: false, alter: true });
//   })
