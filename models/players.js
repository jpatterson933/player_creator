const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Players extends Model {}

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
            min: 1,
            max: 14,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            // this is a custome validator to make sure the person selects the drop down from the menu and only warrrior, archer or knight can be accepted
            validate: {
                isDefinedType(value) {
                    switch (value) {
                        case (value !== 'warrior'):
                            throw new Error('This is not a correct player type!!');
                        case (value !== 'archer'):
                            throw new Error('This is not an acceptable player type!!');
                        case (value !== 'knight'):
                            throw new Error('This is not an the correct type of player to pick!!');
                        default:
                            throw new Error('You have not chosen a player type!');
                    }
                    
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