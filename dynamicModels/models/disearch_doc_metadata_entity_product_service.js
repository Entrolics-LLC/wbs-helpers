'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadataEntityProductService extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadataEntityProductService.init(
        {
            file_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            value: DataTypes.STRING(100000),
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata_entity_product_service`,
            tableName: 'disearch_doc_metadata_entity_product_service',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadataEntityProductService;
};
