const { Model, Datatypes } = require('sequelize');

const sequelize = require('../config/connection');

class Players extends Model {}

Players.init (
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            min: 1,
            max: 14,
        },
        type: {
            type: Datatypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'players'
    }
)

module.exports = Players;