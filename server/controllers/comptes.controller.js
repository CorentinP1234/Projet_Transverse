const Sequelize = require("../db.connection");
const Comptes = require("../models/mission.model")(Sequelize.connection, Sequelize.Sequelize)
const { Op } = require("sequelize");

exports.create = async (mission) => {
  Comptes.create(mission)
}

exports.findByEmail = async (req, res) => {
  const email = req.body.email;
  var condition = email ? { email: { [Op.eq]: email } } : null;

  var result;
  await Comptes.findOne({ where: condition })
    .then(data => {
      result = data
    })
    .catch(data => {
      result = data
    })
  return result;
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  Comptes.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find compte with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving record with id=" + id
      });
    });
}

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "compte was" + id + "deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete compte with id=${id}. Maybe record was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete record with id=" + id
      });
    });
};