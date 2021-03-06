module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("Cliente", {
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        cedula: {
            type: Sequelize.BIGINT
        },
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    });
    return Cliente;
};
