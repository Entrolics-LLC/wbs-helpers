'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class EvaluationDocumentEnteries extends Model {
        static associate(models) {
            // define association here
        }
    }
    EvaluationDocumentEnteries.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            evaluations_entries_id: DataTypes.STRING(100),
            question: DataTypes.TEXT,
            response: DataTypes.TEXT,
            refrence_text: DataTypes.TEXT,
            relavent_text: DataTypes.TEXT,
            document_name: DataTypes.STRING(255),
            document_score: DataTypes.NUMERIC,
            feedback_rating: DataTypes.INTEGER,
            feedback_comment:DataTypes.TEXT,
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_evaluations_document_entries`,
            tableName: 'evaluations_document_entries',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return EvaluationDocumentEnteries;
};

