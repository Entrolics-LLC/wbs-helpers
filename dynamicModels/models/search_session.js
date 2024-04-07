'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class searchSession extends Model {
        static associate(models) {
            // define association here
        }
    }
    searchSession.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            user_id: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            title: DataTypes.STRING(1098765),
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_search_session`,
            tableName: 'search_session',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return searchSession;
};