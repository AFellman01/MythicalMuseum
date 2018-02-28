var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var animals = sequelize.define("animals", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Weight: {
      type
    }

  });

  return animals;
}
