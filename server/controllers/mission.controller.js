const Sequelize = require("../db.connection");


// Create a record
exports.create = async (userId, book) => {
  const tableName = "books" + userId
  const Mission = require("./../models/mission.model")(tableName, Sequelize.connection, Sequelize.Sequelize)
  await Mission.sync()


  // maxId(tableName).then(maxId => {
  //     book.id = maxId + 1
  //     BookTable.create(book)
  //     console.log("Creating new book (id: " + (maxId + 1) + ") in " + tableName)
  // }
  // ).catch(e => console.log("Error", e))
}

// Update a record 
exports.update = async (userId, book) => {
  const tableName = "books" + userId
  const BookTable = require("./../models/book.model")(tableName, Sequelize.connection, Sequelize.Sequelize)
  await BookTable.sync()

  maxId(tableName).then(maxId => {
      BookTable.update(book, { where: { id: book.id } })
      console.log("Updating book (id: " + book.id + ") in " + tableName)
  }).catch(e => console.log("Error", e))
}

// Delete a record with a certain id
exports.delete = async (bookId, userId) => {
  const tableName = "books" + userId
  const BookTable = require("./../models/book.model")(tableName, Sequelize.connection, Sequelize.Sequelize)
  await BookTable.sync()

  BookTable.destroy({
      where: { id: bookId }
  })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "Book was deleted successfully!"
              });
          } else {
              res.send({
                  message: `Cannot delete book with id=${bookId}. Maybe book was not found!`
              });
          }
      })
      .catch(err => {
          //res.status(500).send({
          //    message: "Could not delete record with id=" + id
          //});
      });
};

// Send books to a user
exports.get = async (mission_id) => {
const tableName = "books" + userId
const BookTable = require("./../models/book.model")(tableName, Sequelize.connection, Sequelize.Sequelize)
const Mission = require("./../models/mission.model")()
await BookTable.sync()

var books = await BookTable.findAll()
var json = JSON.stringify(books)
return json 
}