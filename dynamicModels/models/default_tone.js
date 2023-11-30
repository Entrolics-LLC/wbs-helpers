'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DefaultTone extends Model {
        static associate(models) {
            // define association here
        }
    }
    DefaultTone.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            tone_combo: DataTypes.STRING,
            use_case: DataTypes.STRING,
            output: DataTypes.STRING(1098765),
            example: DataTypes.STRING(1098765),
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_default_tones`,
            tableName: 'default_tones',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DefaultTone;
};