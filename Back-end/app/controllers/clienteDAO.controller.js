const db = require("../models");
const Clientes = db.Clientes;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cedula) {
        res.status(400).send({
            message: "Debe enviar numero de cedula!"
        });
        return;
    }
    // crea una venta
    const cliente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula

        
    };
    // Guardamos a la base de datos
    Clientes.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al crear un cliente."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Clientes.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener cliente con id=" + id
            });
        });
};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    
    Clientes.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al obtener los clientes."
            });
        });
};


