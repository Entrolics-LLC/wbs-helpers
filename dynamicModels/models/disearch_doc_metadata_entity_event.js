'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataEntityEvent extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataEntityEvent.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_entity_event`,
            tableName: 'disearch_doc_metadata_entity_event',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataEntityEvent;
};
