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
            validate: { len: [1, 13] }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            // CUSTOM VALIDATOR
            validate: {
                // type must be of a specific character type else it will throw an error
                isDefinedType(typeOf) {
                    if (typeOf === 'warrior') {
                        return;
                    } else if (typeOf === 'archer') {
                        return;
                    } else if (typeOf === 'knight') {
                        return;
                    } else
                        throw new Error('This is not a correct player type!!');

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