const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Players extends Model { }

Players.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isAlphanumeric: true,
            isUppercase: true,
            validate: {
                len: {
                    args: [2, 13],
                    msg: "The name must contain between 2 and 13 characters."
                },
                isAlphanumeric: {
                    args: true,
                    msg: "Must not contain special characters!"
                }
            }
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