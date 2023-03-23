module.exports = (sequelize, Sequelize) => {
  const Mission = sequelize.define("mission", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    titre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    recruteur: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    xp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    participant_max: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
    heure: {
      type: Sequelize.STRING,
      allowNull: false
    },
    duree: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lien_important: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lien_contact: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lieu: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },);

  return Mission;
};