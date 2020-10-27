module.exports = app => {
    const reserva = require("../controllers/reservaDAO.controller.js");
    var router = require("express").Router();
    router.post("/", reserva.create);
    router.get("/", reserva.findAll);
    router.get("/id/:id", reserva.findOne);
    app.use('/api/reserva', router);
    router.route("/lista").get(reserva.listaReserva);
};