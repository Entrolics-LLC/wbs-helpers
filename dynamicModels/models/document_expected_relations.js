'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DocumentExpectedRelations extends Model {
        static associate(models) {
            // define associations here if needed
            // Example (optional):
            // this.belongsTo(models[`${schema}_evaluation_expected_entries`], { foreignKey: 'expected_entry_id' });
            // this.belongsTo(models[`${schema}_evaluations_document_entries`], { foreignKey: 'document_entry_id' });
        }
    }

    DocumentExpectedRelations.init(
        {
            id: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            document_entry_id: DataTypes.STRING(36),
            expected_entry_id: DataTypes.STRING(36),
            similarity_score: DataTypes.FLOAT,
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
            modelName: `${schema}_document_expected_relations`,
            tableName: 'document_expected_relations',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DocumentExpectedRelations;
};