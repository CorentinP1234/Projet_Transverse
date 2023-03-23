module.exports = (sequelize, Sequelize) => {
    const Compte = sequelize.define("compte", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        nom: {
            type: Sequelize.STRING
        },
        mdp: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        }

    },);

    return Compte;
};