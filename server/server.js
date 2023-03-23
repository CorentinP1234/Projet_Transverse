const express = require('express')
const app = express()

// const indexRouter = require('./routes/mission')
// const loginRouter = require('./routes/login')


app.get("/api", (req, res) => {
  let message = { "users": ["userOne", "userTwo", "userThree"] }
  console.log(`Sending ${JSON.stringify(message)}`)
  res.json(message)
})
// app.use('/', missionRouter)
// app.use('/login', loginRouter)

app.listen(5000, () => { console.log("Server started on port 5000") })


// Get all missions
app.get("/api/missions", (req, res) => {
  Missions.findAll()
    .then(missions => {
      res.json(missions)
    })
    .catch(err => {
      console.error("Error getting all missions: ", err)
      res.status(500).send("Error getting all missions")
    })

  // let message = { "users": ["userOne", "userTwo", "userThree"] }
  // console.log("Sending missions")
  // res.json(message)
})

// Get all comptes
app.get("/comptes", (req, res) => {
  Comptes.findAll()
    .then(comptes => {
      res.json(comptes)
    })
    .catch(err => {
      console.error("Error getting all comptes: ", err)
      res.status(500).send("Error getting all comptes")
    })
})



const { Sequelize, connection } = require("./db.connection")



// Create tables
const Comptes = require("./models/compte.model")(connection, Sequelize);
const Missions = require("./models/mission.model")(connection, Sequelize);

const all_missions = require('./tmpMissions.json')
const all_comptes = require("./tmpComptes.json")

Comptes.sync({ force: true })
  .then(() => {
    return Comptes.bulkCreate(all_comptes)
  })
  .then(data => { console.log("Table compte syncrhonisé") })
  .catch(() => console.log("Erreur synchronisation compte"))


Missions.sync({ force: true })
  .then(() => {
    return Missions.bulkCreate(all_missions)
  })
  .then(data => console.log("Table mission syncrhonisé"))
  .catch((err) => console.log("Erreur synchronisation mission:\n" + err))

// Prevent DeadLock (Session is link to User)
// Compte.sync({ force: false, alter: true })
//   .then(() => {
//     Session.belongsTo(User); // must wait User finish
//     Session.sync({ force: false, alter: true });
//   })
// const obj = {
//       titre: "example_de_titre",
//       description: "Ceci est une description",
//       recruteur: "example de recruteur",
//       type: "example de type de mission",
//       xp: "5",
//       participant_max: "10",
//       date: "10 mars",
//       heure: "11h",
//       duree: "120 min",
//       lien_important: "http//inscription.com",
//       lien_contact: "Discord: discord.com/...\nMail: Assos@mail.com",
//       lieu: "Effrei"
//     }