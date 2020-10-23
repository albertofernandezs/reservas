const db = require("../models");
const Restaurantes = db.Restaurantes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Debe enviar el nombre!"
        });
        return;
    }
    // crea un restaurante
    const restaurante = {
        nombre: req.body.nombre,
        direccion: req.body.direccion    
    };

    // Guardamos a la base de datos
    Restaurantes.create(restaurante)
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
    Restaurantes.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el restaurante con id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Restaurantes.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los restaurantes."
            });
        });
};