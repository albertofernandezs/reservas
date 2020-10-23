module.exports = (sequelize, Sequelize) => {
    const Mesa = sequelize.define("Mesa", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        id_restaurante: {
            type: Sequelize.BIGINT
        },
        posicion_x:{
            type: Sequelize.DOUBLE
        },
        posicion_y:{
            type: Sequelize.DOUBLE
        },
        planta:{
            type: Sequelize.BIGINT
        },
        capacidad: {
            type: Sequelize.STRING
        },
    });
    return Mesa;
};
