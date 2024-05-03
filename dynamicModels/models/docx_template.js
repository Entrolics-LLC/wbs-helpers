'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocxTemplate extends Model {
        static associate(models) {
            // define association here
        }
    }
    DocxTemplate.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            template_name: DataTypes.STRING,
            gs_urls: DataTypes.ARRAY(DataTypes.STRING),
            created_by: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_docx_template`,
            tableName: 'docx_template',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocxTemplate;
};
