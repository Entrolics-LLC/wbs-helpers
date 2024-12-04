'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes, schema) => {
    class DisearchDocMetadata extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    DisearchDocMetadata.init(
        {
            file_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            filename: DataTypes.STRING,
            classification: DataTypes.STRING(100000),
            organization_created_for: DataTypes.STRING(100000),
            organization_created_by: DataTypes.STRING(100000),
            project_name_created_for: DataTypes.STRING(100000),
            project_start_date: DataTypes.DATE,
            project_end_date: DataTypes.DATE,
            version: DataTypes.STRING(100000),
            doc_author: DataTypes.STRING(100000),
            publisher: DataTypes.STRING(100000),
            doc_created_date: DataTypes.DATE,
            doc_published_date: DataTypes.DATE
        },
        {
            sequelize,
            modelName: `${schema}_disearch_doc_metadata`,
            tableName: 'disearch_doc_metadata',
            schema,
            createdAt: false,
            updatedAt: false
        }
    );

    return DisearchDocMetadata;
};
