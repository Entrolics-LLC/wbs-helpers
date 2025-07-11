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
        evaluation_id: {
            type: DataTypes.STRING
        },
        history_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        explanation: {
            type: DataTypes.TEXT
        },
        ndcg_k3: {
            type: DataTypes.DECIMAL(16, 14)
        },
        recall_k3: {
            type: DataTypes.DECIMAL(3, 1)
        },
        precision_k3: {
            type: DataTypes.DECIMAL(16, 14)
        },
        ndcg_k5: {
            type: DataTypes.DECIMAL(16, 14)
        },
        recall_k5: {
            type: DataTypes.DECIMAL(3, 1)
        },
        precision_k5: {
            type: DataTypes.DECIMAL(16, 14)
        },
        ndcg_k10: {
            type: DataTypes.DECIMAL(16, 14)
        },
        recall_k10: {
            type: DataTypes.DECIMAL(3, 1)
        },
        precision_k10: {
            type: DataTypes.DECIMAL(16, 14)
        },
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
