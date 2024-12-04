'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataEntityPerson extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataEntityPerson.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_entity_person`,
            tableName: 'disearch_doc_metadata_entity_person',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataEntityPerson;
};
