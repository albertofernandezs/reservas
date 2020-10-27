//const ohh = require("sequelize/types");
const db = require("../models");
const Mesas = db.Mesas;
const Restaurantes = db.Restaurantes;
const Reservas = db.Reservas;
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

exports.listaPorReserva = async (req, res) => {
    var id_restaurante = req.query.id_restaurante;
    var fecha_reserva = req.query.fecha;
    //fecha_reserva = req.query.fecha;
    var hora_inicial = req.query.hora_inicial;
    var hora_final = req.query.hora_final;
    var lista_mesas=[];
    await db.sequelize.query('SELECT * FROM "Mesas" WHERE id_restaurante = (:id)', {
        replacements: { id: id_restaurante },
        type: db.sequelize.QueryTypes.SELECT,
        model: Mesas,
    }).then(data => {
        lista_mesas = data;
    });
    var lista_final=[];
    var lista_reserva=[];
    for (var i = 0; i < lista_mesas.length; i++) {
        await db.sequelize.query('SELECT * FROM "Reservas" WHERE id_mesa = (:id)', {
            replacements: { id: lista_mesas[i].dataValues.id },
            type: db.sequelize.QueryTypes.SELECT,
            model: Reservas,
        }).then(data => {
            lista_reserva = data;
        });
        //console.log(lista_reserva[0].dataValues);
        var bool = true;
        var j = 0;
        while (j < lista_reserva.length ) {
            var inicial = lista_reserva[j].dataValues.hora_inicial;
            var final = lista_reserva[j].dataValues.hora_final;
            var fecha = lista_reserva[j].dataValues.fecha;
            if (fecha_reserva == fecha) {
                if ( (hora_inicial<= inicial && hora_final>= inicial) || (hora_inicial<= final && hora_final>= final) || (hora_inicial>= inicial && hora_final<= final) || (hora_inicial<= inicial && hora_final>= final)) {
                    bool = false;
                    j=lista_reserva.length;
                }
            }
            j++;
        }
        if (bool) {
            lista_final.push(lista_mesas[i]);
        }
    }
    res.send(lista_final);
};