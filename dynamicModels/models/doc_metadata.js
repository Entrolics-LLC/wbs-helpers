'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocMetaData extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocMetaData.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            filename: DataTypes.STRING,
            content_type: DataTypes.STRING(100000),
            domain: DataTypes.STRING(100000),
            timestamp: DataTypes.STRING,
            content: DataTypes.STRING(100000),
            version: DataTypes.STRING,
            doc_created_date: DataTypes.STRING,
            doc_published_date: DataTypes.STRING,
            doc_author: DataTypes.STRING(100000),
            publisher: DataTypes.STRING,
            submitted_to: DataTypes.STRING,
            topics: DataTypes.STRING(100000),
            extracted_domain: DataTypes.STRING(100000),
            sector_industry: DataTypes.STRING(100000),
            governance_metadata: DataTypes.STRING(100000),
            security_metadata: DataTypes.STRING(100000),
            entity_person: DataTypes.STRING(100000),
            entity_organization: DataTypes.STRING(100000),
            entity_location: DataTypes.STRING(100000),
            entity_date: DataTypes.STRING(100000),
            entity_product_service: DataTypes.STRING(100000),
            entity_event: DataTypes.STRING(100000),
            classification: DataTypes.STRING(100000),
            organization_created_for: DataTypes.STRING,
            organization_created_by: DataTypes.STRING,
            organization_names: DataTypes.STRING(100000),
            project_name_created_for: DataTypes.STRING,
            project_start_date: DataTypes.STRING,
            project_end_date: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_doc_metadata`,
            tableName: 'doc_metadata',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocMetaData;
};