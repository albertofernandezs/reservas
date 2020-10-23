module.exports = app => {
    const restaurante = require("../controllers/restauranteDAO.controller.js");
    var router = require("express").Router();
    router.post("/", restaurante.create);
    router.get("/", restaurante.findAll);
    router.get("/:id", restaurante.findOne);
    app.use('/api/restaurante', router);
};