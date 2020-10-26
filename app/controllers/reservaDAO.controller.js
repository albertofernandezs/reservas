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
    Reservas.findByPk(id)
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

exports.listaReserva = async (req, res) => {
    var id_restaurante = req.query.id_restaurante;
    var fecha = req.query.fecha;
    var id_cliente = req.query.id_cliente;
    var lista_reserva = [];
    if (id_cliente != null) {
        await db.sequelize.query('SELECT * FROM "Reservas" WHERE id_restaurante = (:id_restaurante) AND fecha = (:fecha) AND id_cliente = (:id_cliente)', {
            replacements: { id_restaurante: id_restaurante,
                            fecha:fecha,
                            id_cliente:id_cliente},
            type: db.sequelize.QueryTypes.SELECT,
            model: Reservas,
        }).then(data => {
            lista_reserva = data;
        });
    }else{
        await db.sequelize.query('SELECT * FROM "Reservas" WHERE id_restaurante = (:id_restaurante) AND fecha = (:fecha)', {
            replacements: { id_restaurante: id_restaurante,
                            fecha:fecha},
            type: db.sequelize.QueryTypes.SELECT,
            model: Reservas,
        }).then(data => {
            lista_reserva = data;
        });

    }
    res.send(lista_reserva);
};