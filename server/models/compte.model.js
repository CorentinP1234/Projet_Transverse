module.exports = (sequelize, Sequelize) => {
    const Compte = sequelize.define("compte", {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull : false
        },
        nom: {
            type: Sequelize.STRING,
            allowNull : false
        },
        mdp: {
            type: Sequelize.STRING,
            allowNull : false
        },
        type: {
            type: Sequelize.STRING,
            allowNull : false
        }

    },);

    return Compte;
};