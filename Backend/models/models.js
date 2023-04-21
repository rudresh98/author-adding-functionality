const moment = require("moment");
const AuthorSchema = require("../schema/schema");
const chalk = require("chalk");
const authorModel = {};

authorModel.allAuthor = async () => {
  try {
    const data = await AuthorSchema.findAll();
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
authorModel.authorDetails = async (id) => {
  try {
    const data = await AuthorSchema.findByPk(id);
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
authorModel.getChemicalListDetails = async (id) => {
  try {
    const data = await ChemicalSchema.findByPk(id);
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
authorModel.addAuthor = async (first_name, last_name, email, birthdate) => {
  console.log(first_name);
  try {
    const data = await AuthorSchema.create({
      first_name,
      last_name,
      email,
      birthdate,
    });
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
authorModel.editAuthor = async (
  id,
  first_name,
  last_name,
  email,
  birthdate
) => {
  console.log(id, first_name, last_name, email, birthdate);
  try {
    const data = await AuthorSchema.update(
      {
        first_name,
        last_name,
        email,
        birthdate,
      },
      { where: { id } }
    );
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
authorModel.deleteAuthor = async (id) => {
  try {
    const data = await AuthorSchema.destroy({ where: { id } });
    return data;
  } catch (error) {
    console.error(chalk.red(error.message));
    return error;
  }
};
module.exports = authorModel;
