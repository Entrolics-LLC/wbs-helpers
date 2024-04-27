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
            session_id: DataTypes.STRING,
            search_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
            reference_text: DataTypes.STRING(1098765),
            file_name: DataTypes.STRING(1098765),
            file_id: DataTypes.STRING,
            domain: DataTypes.ARRAY(DataTypes.STRING),
            filter_domains: DataTypes.ARRAY(DataTypes.STRING),
            uploaded_date: { type: DataTypes.DATE },
            es_confidence: DataTypes.FLOAT,
            is_deleted: DataTypes.BOOLEAN,
            file_id: DataTypes.STRING,
            content_type: DataTypes.STRING,
            meta: DataTypes.JSONB,
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
