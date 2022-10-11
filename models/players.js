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
        type: {
            type: Datatypes.STRING,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            min: 1,
            max: 14,
        }
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