const { DataTypes } = require("sequelize");
const { sequelize, Sequelize } = require("../db/db");

const AuthorSchema = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8_unicode_ci",
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      collate: "utf8_unicode_ci",
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      collate: "utf8_unicode_ci",
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "authors",
    timestamps: false,
  }
);
AuthorSchema.sync({ force: true });
module.exports = AuthorSchema;
