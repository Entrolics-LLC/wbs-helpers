'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataTopic extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataTopic.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_topic`,
            tableName: 'disearch_doc_metadata_topic',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataTopic;
};
