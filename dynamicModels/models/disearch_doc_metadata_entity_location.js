'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataEntityLocation extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataEntityLocation.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_entity_location`,
            tableName: 'disearch_doc_metadata_entity_location',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataEntityLocation;
};
