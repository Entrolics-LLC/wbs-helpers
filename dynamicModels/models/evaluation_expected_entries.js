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
            evaluation_id: DataTypes.STRING(36),
            history_id: DataTypes.STRING(36),
            expected_chunk_index: DataTypes.INTEGER,
            expected_text: DataTypes.TEXT,
            expected_embedding: DataTypes.VECTORS,// same dimensionality as others,
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