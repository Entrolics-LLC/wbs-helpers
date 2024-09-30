'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class VertexaiSetting extends Model {
        static associate(models) {
            // define association here
        }
    }
    VertexaiSetting.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            relevance: DataTypes.FLOAT,
            recency_boost: DataTypes.FLOAT,
            recency_boost_enable: DataTypes.BOOLEAN,
            entity_person_boost: DataTypes.FLOAT,
            entity_person_boost_enable: DataTypes.BOOLEAN,
            entity_org_boost: DataTypes.FLOAT,
            entity_org_boost_enable: DataTypes.BOOLEAN,
            entity_product_service: DataTypes.FLOAT,
            entity_product_service_enable: DataTypes.BOOLEAN,
            sector_industry: DataTypes.FLOAT,
            sector_industry_enable: DataTypes.BOOLEAN,
            sector_industry_subdomains: DataTypes.FLOAT,
            sector_industry_subdomains_enable: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_vertexai_settings`,
            tableName: 'vertexai_settings',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return VertexaiSetting;
};