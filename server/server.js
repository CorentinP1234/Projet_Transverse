const express = require('express');
const app = express();
const { Sequelize, connection } = require("./db.connection");


const Comptes = require("./models/compte.model")(connection, Sequelize);
const Missions = require("./models/mission.model")(connection, Sequelize);

const all_missions = require('./tmpMissions.json');
const all_comptes = require("./tmpComptes.json");

Comptes.sync({ force: true })
  .then(() => {
    return Comptes.bulkCreate(all_comptes);
  })
  .then(data => { console.log("Table compte syncrhonisé"); })
  .catch(() => console.log("Erreur synchronisation compte"));

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
  var is_already_singin = ComptesController.findByEmail(req, res);

  if (is_already_singin) return;

  const compte = {
    email: req.body.email,
    nom: req.body.nom,
    mdp: req.body.mdp,
    type: req.body.type,
  };
  Comptes.create(compte);
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

app.get('api/login', async (req, res) => {
  console.log("POST /login");
  var isLoggedIn = ComptesController.findByEmail(req, res);
  if (isLoggedIn)
    return true;
  else
    return false;
});

app.listen(5000, () => { console.log("Server started on port 5000"); });