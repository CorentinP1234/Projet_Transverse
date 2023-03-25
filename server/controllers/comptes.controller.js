// Importation des dépendances nécessaires
const Sequelize = require("../db.connection");// permet d'importer la connexion à la base de données
const Comptes = require("../models/mission.model")(Sequelize.connection, Sequelize.Sequelize);// permet d'importer le modèle de données pour la table Missions
const { Op } = require("sequelize");// permet d'utiliser les opérateurs Sequelize

// Fonction pour créer une nouvelle mission
exports.create = async (mission) => {
  Comptes.create(mission);
};

exports.findByEmailAndPassword = async (email, password) => {
  // Création de la condition à utiliser pour la requête
  var condition = email ? { email: { [Op.eq]: email }, passowrd: { [Op.eq]: password } } : null;

  var result;
  // Utilisation de la fonction findOne pour trouver la copmte correspondant à la condition
  await Comptes.findOne({ where: condition })
    .then(data => {
      result = data;
    })
    .catch(data => {
      result = data;
    });
  // Renvoi du résultat de la requête
  return result;
};

exports.findByEmail = async (email) => {
  // Création de la condition à utiliser pour la requête
  var condition = email ? { email: { [Op.eq]: email } } : null;

  var result;
  // Utilisation de la fonction findOne pour trouver le compte correspondant à la condition
  await Comptes.findOne({ where: condition })
    .then(data => {
      result = data;
    })
    .catch(data => {
      result = data;
    });
  // Renvoi du résultat de la requête
  return result;
}

// Fonction pour trouver une mission par ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  // Utilisation de la fonction findByPk pour trouver la mission correspondant à l'ID
  Comptes.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        // Si la mission n'est pas trouvée, renvoi d'une erreur 404
        res.status(404).send({
          message: `Cannot find compte with id = ${id}.`
        });
      }
    })
    .catch(err => {
      // En cas d'erreur, renvoi d'une erreur 500
      res.status(500).send({
        message: "Error retrieving record with id=" + id
      });
    });
};

// Fonction pour supprimer une mission par ID
exports.delete = (req, res) => {
  const id = req.params.id;

  // Utilisation de la fonction destroy pour supprimer la mission correspondant à l'ID
  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        // Si la mission a été supprimée avec succès, renvoi d'un message de confirmation
        res.send({
          message: "compte was" + id + "deleted successfully!"
        });
      } else {
        // Si la mission n'a pas été trouvée, renvoi d'un message d'erreur
        res.send({
          message: `Cannot delete compte with id = ${id}.Maybe record was not found!`
        });
      }
    })
    .catch(err => {
      // En cas d'erreur, renvoi d'une erreur 500
      res.status(500).send({
        message: "Could not delete record with id=" + id
      });
    });
};