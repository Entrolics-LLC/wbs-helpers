'use strict';
const { values } = require('lodash');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class EvaluationDocumentInfo extends Model {
        static associate(models) {
            // define association here
        }
    }
    EvaluationDocumentInfo.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_name: DataTypes.TEXT,
            status: DataTypes.TEXT,
            file_size: DataTypes.INTEGER,
            file_type: DataTypes.TEXT,
            gs_url: DataTypes.TEXT,
            uploaded_by: DataTypes.STRING,
            evaluation_id: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_evaluations_document_info`,
            tableName: 'evaluations_document_info',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return EvaluationDocumentInfo;
};