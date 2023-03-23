const Sequelize = require("../db.connection");
const Missions = require("./../models/mission.model")(Sequelize.connection, Sequelize.Sequelize)

// Create a record
exports.create = async (mission) => {

  Missions.create(mission)
}

