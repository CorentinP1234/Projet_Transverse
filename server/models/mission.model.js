module.exports = (sequelize, Sequelize) => {
  const Mission = sequelize.define("compte", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titre: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    recruteur: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    xp: {
      type: Sequelize.STRING
    },
    participant_max: {
      type: Sequelize.INTEGER
    },

    date: {
      type: Sequelize.STRING
    },
    heure: {
      type: Sequelize.STRING
    },
    duree: {
      type: Sequelize.STRING
    },

    lien_important: {
      type: Sequelize.STRING
    },
    lien_contact: {
      type: Sequelize.STRING
    },


    lieu: {
      type: Sequelize.STRING
    },
  },);

  return Mission;
};