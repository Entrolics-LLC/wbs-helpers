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
            title: DataTypes.STRING(1098765),
            llm_model: DataTypes.JSONB,
            search_type: DataTypes.STRING,
            feedback: DataTypes.STRING(1098765),
            rating: DataTypes.INTEGER,
            file_ids: DataTypes.ARRAY(DataTypes.STRING),
            di_search: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
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