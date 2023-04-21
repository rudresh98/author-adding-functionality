module.exports = {
  DB: "sarvika",
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "",
  dialect: "mysql",
  logging: false,
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
};
