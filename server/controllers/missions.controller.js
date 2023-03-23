const Sequelize = require("../db.connection");
const Missions = require("../models/mission.model")(Sequelize.connection, Sequelize.Sequelize)
const { Op } = require("sequelize");

exports.create = async (mission) => {
  Missions.create(mission)
}

exports.findByEmail = async (req, res) => {
  const email = req.body.email;
  var condition = email ? { email: { [Op.eq]: email } } : null;

  var result;
  await Missions.findOne({ where: condition })
    .then(data => {
      result = data
    })
    .catch(data => {
      result = data
    })
  return result
}


