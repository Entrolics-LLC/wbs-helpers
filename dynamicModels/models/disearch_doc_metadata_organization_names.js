'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataOrganizationNames extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataOrganizationNames.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_organization_names`,
            tableName: 'disearch_doc_metadata_organization_names',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataOrganizationNames;
};
