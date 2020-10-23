const db = require("../models");
const Reservas = db.Reservas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   /* // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Debe enviar el nombre!"
        });
        return;
    }*/
    // crea una reserva
    const reserva = {
        id_restaurante: req.body.id_restaurante,
        id_mesa: req.body.id_mesa,
        id_cliente: req.body.id_cliente,
        fecha: req.body.fecha,
        hora_inicial: req.body.hora_inicial,
        hora_final: req.body.hora_final,
        cantidad: req.body.cantidad
    };

    // Guardamos a la base de datos
    Reservas.create(reserva)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear una reserva."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    R.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener la reserva con id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    //const mesa = req.query.id_mesa;
    //var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Reservas.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las reservas."
            });
        });
};