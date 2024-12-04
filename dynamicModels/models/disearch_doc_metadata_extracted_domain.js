'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataExtractedDomain extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataExtractedDomain.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_extracted_domain`,
            tableName: 'disearch_doc_metadata_extracted_domain',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataExtractedDomain;
};
