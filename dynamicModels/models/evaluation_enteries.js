'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class EvaluationEntries extends Model {
        static associate(models) {
            // Define associations here if needed
        }
    }

    EvaluationEntries.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        evaluation_id: DataTypes.STRING,
        history_id: DataTypes.STRING,
        search_history_id: DataTypes.STRING,
        question: DataTypes.STRING(1058876),
        response: DataTypes.STRING(1058876),
        relevance_explanation: DataTypes.STRING(1058876),
        contextual_alignment_explanation: DataTypes.STRING(1058876),
        relevance_score: DataTypes.STRING(1058876),
        contextual_alignment_score: DataTypes.STRING(1058876),
        score: DataTypes.DECIMAL(3, 1),
        explanation: DataTypes.TEXT,
        ndcg_k3: DataTypes.DECIMAL(16, 14),
        recall_k3: DataTypes.DECIMAL(16, 14),
        precision_k3: DataTypes.DECIMAL(16, 14),
        ndcg_k5: DataTypes.DECIMAL(16, 14),
        recall_k5: DataTypes.DECIMAL(16, 14),
        precision_k5: DataTypes.DECIMAL(16, 14),
        ndcg_k10: DataTypes.DECIMAL(16, 14),
        recall_k10: DataTypes.DECIMAL(16, 14),
        precision_k10: DataTypes.DECIMAL(16, 14),
        success_k3: DataTypes.DECIMAL(10, 4),
        success_k5: DataTypes.DECIMAL(10, 4),
        success_k10: DataTypes.DECIMAL(10, 4),
        limit_scope: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        boosting_rules: DataTypes.JSONB,
        metadata_filters: DataTypes.JSONB,
        filter_domains: DataTypes.ARRAY(DataTypes.STRING),
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: `${schema}_evaluations_entries`,
        tableName: 'evaluations_entries',
        schema,
        createdAt: false,
        updatedAt: false
    });

    return EvaluationEntries;
};
