// Importation du fichier de configuration de la base de données
const dbConfig = require("./db.config.js");

// Importation de la bibliothèque Sequelize
const Sequelize = require("sequelize");

// Création de la connexion à la base de données en utilisant Sequelize
const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    // Configuration du pool de connexions de la base de données
    pool: {
        max: dbConfig.pool.max,       // Nombre maximum de connexions autorisées
        min: dbConfig.pool.min,       // Nombre minimum de connexions à maintenir
        acquire: dbConfig.pool.acquire,   // Temps maximum d'attente pour établir une connexion
        idle: dbConfig.pool.idle       // Temps maximum qu'une connexion peut être inactive avant d'être libérée
    },

    // Désactivation de l'affichage des requêtes SQL dans la console
    logging: false
});

// Exportation de la connexion et de la bibliothèque Sequelize
module.exports = {
    Sequelize: Sequelize,
    connection: connection
};
