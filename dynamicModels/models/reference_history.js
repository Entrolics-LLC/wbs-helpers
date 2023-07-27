'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ReferenceHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    ReferenceHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            search_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            search: DataTypes.STRING(2000),
            reference_text: DataTypes.STRING(10000),
            file_name: DataTypes.STRING(512),
            file_id: DataTypes.STRING,
            domain: DataTypes.ARRAY(DataTypes.STRING),
            uploaded_date: { type: DataTypes.DATE },
            es_confidence: DataTypes.FLOAT,
            is_deleted: DataTypes.BOOLEAN,
            file_id: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_reference_history`,
            tableName: 'reference_history',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return ReferenceHistory;
};