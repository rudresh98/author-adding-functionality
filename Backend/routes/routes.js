const routes = require("express").Router();
const {
  allAuthor,
  editAuthor,
  addAuthor,
  deleteAuthor,
  authorDetails,
} = require("../controllers/controllers");
routes.get("/authors", allAuthor);
routes.get("/author/:id", authorDetails);
routes.post("/author", addAuthor);
routes.put("/author", editAuthor);
routes.delete("/author/:id", deleteAuthor);
module.exports = routes;
