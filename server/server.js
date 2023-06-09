const express = require('express');
const app = express();
const { Sequelize, connection } = require("./db.connection");
app.use(express.json());

const Comptes = require("./models/compte.model")(connection, Sequelize);
const Missions = require("./models/mission.model")(connection, Sequelize);

const all_missions = require('./tmpMissions.json');
// const all_comptes = require("./tmpComptes.json");

Comptes.sync({ force: true });
//   .then(() => {
//     return Comptes.bulkCreate(all_comptes);
//   })
//   .then(data => { console.log("Table compte syncrhonisé"); })
//   .catch(() => console.log("Erreur synchronisation compte"));

Missions.sync({ force: true })
  .then(() => {
    return Missions.bulkCreate(all_missions);
  })
  .then(data => console.log("Table mission syncrhonisé"))
  .catch((err) => console.log("Erreur synchronisation mission:\n" + err));


const ComptesController = require("./controllers/comptes.controller");
const MissionsController = require("./controllers/missions.controller");

app.get("/api/missions", (req, res) => {
  Missions.findAll()
    .then(missions => {
      res.json(missions);
    })
    .catch(err => {
      console.error("Error getting all missions: ", err);
      res.status(500).send("Error getting all missions");
    });
});

app.get("/api/comptes", (req, res) => {
  Comptes.findAll()
    .then(comptes => {
      res.json(comptes);
    })
    .catch(err => {
      console.error("Error getting all comptes: ", err);
      res.status(500).send("Error getting all comptes");
    });
});

app.post('/api/signin', async (req, res) => {
  console.log("POST /signin");
  const compte = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log("sign in :" + JSON.stringify(compte));

  var is_already_singin = await ComptesController.findCompteByEmailAndPassword(compte.email, compte.password);

  if (is_already_singin) {
    console.log("user is already sign in, does nothing");
    return;
  }
  
  console.log("Create compte\n");
  Comptes.create(compte);
});


app.post('/api/login', async (req, res) => {
  console.log("POST /login");
  const compte = {
    email: req.body.email,
    password: req.body.password,
  };
  console.log("log in :" + JSON.stringify(compte));
  const isLoggedIn = await ComptesController.findCompteByEmailAndPassword(compte.email, compte.password);

  if (isLoggedIn) {
    console.log(`Login successful for email: ${compte.email}`);
    res.status(200).json({ message: 'Login successful' });
  } else {
    console.log(`Login failed for email: ${compte.email}`);
    res.status(401).json({ message: 'Invalid email or password' });
  }
  console.log();
});

app.post("/api/addMission", async function (req, res) {
  console.log("POST /addMission");

  const mission = {
    titre: req.body.titre,
    description: req.body.description,
    recruteur: req.body.recruteur,
    type: req.body.type,
    xp: req.body.xp,
    participant_max: req.body.participant_max,
    date: req.body.date,
    heure: req.body.heure,
    duree: req.body.duree,
    lien_important: req.body.lien_important,
    lien_contact: req.body.lien_contact,
    lieu: req.body.lieu
  };
  Comptes.create(mission);
});

app.listen(5000, () => { console.log("Server started on port 5000"); });