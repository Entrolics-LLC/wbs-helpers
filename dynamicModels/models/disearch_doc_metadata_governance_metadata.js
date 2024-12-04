'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataGovernanceMetadata extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataGovernanceMetadata.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_governance_metadata`,
            tableName: 'disearch_doc_metadata_governance_metadata',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataGovernanceMetadata;
};
