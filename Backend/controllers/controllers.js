const authorModel = require("../models/models");

exports.allAuthor = async (req, res) => {
  try {
    const data = await authorModel.allAuthor();
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.authorDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await authorModel.authorDetails(id);
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.editAuthor = async (req, res) => {
  const { id, first_name, last_name, email, birthdate } = req.body;
  try {
    const data = await authorModel.editAuthor(
      id,
      first_name,
      last_name,
      email,
      birthdate
    );
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.addAuthor = async (req, res) => {
  const { first_name, last_name, email, birthdate } = req.body;
  try {
    const data = await authorModel.addAuthor(
      first_name,
      last_name,
      email,
      birthdate
    );
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await authorModel.deleteAuthor(id);
    if (data.length === 0) {
      res.status(204).json({
        msg: "No data available",
        data,
        length: data.length,
        status: 204,
      });
    } else {
      res.status(200).json({
        msg: "SUCCESS",
        data,
        length: data.length,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      data: [],
      total: 0,
      status: 500,
    });
  }
};
