'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class EvaluationExpectedEntries extends Model {
        static associate(models) {
            // define associations here if needed
        }
    }

    EvaluationExpectedEntries.init(
        {
            id: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            evaluation_id: {
                type: DataTypes.STRING(36)
            },
            history_id: {
                type: DataTypes.STRING(36)
            },
            expected_text: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            expected_embedding: {
                type: DataTypes.VECTORS(1536) // same dimensionality as others
            },
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
            modelName: `${schema}_evaluation_expected_entries`,
            tableName: 'evaluation_expected_entries',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return EvaluationExpectedEntries;
};