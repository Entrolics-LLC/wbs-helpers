'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataEntityDate extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataEntityDate.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_entity_date`,
            tableName: 'disearch_doc_metadata_entity_date',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataEntityDate;
};
