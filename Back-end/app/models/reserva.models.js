module.exports = (sequelize, Sequelize) => {
    const Reserva = sequelize.define("Reserva", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_restaurante: {
            type: Sequelize.BIGINT
        },
        id_mesa: {
            type: Sequelize.BIGINT
        },
        id_cliente: {
            type: Sequelize.BIGINT
        },
        fecha: {
            type: Sequelize.DATE
        },
        hora_inicial:{
            type: Sequelize.BIGINT
        },
        hora_final:{
            type: Sequelize.BIGINT
        },
        cantidad: {
            type: Sequelize.BIGINT
        }
    });
    return Reserva;
};
