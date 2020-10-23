const db = require("../models");
const Mesas = db.Mesas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Debe enviar el nombre!"
        });
        return;
    }
    // crea una mesa
    const mesa = {
        nombre: req.body.nombre,
        id_restaurante: req.body.id_restaurante,
        posicion_x: req.body.posicion_x,
        posicion_y: req.body.posicion_y,
        planta: req.body.planta,
        capacidad: req.body.capacidad
    };

    // Guardamos a la base de datos
    Mesas.create(mesa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un restaurante."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Mesas.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener la mesa con id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Mesas.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener las mesas."
            });
        });
};