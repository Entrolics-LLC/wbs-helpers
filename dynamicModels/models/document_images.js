'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocumentsImages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DocumentsImages.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            file_id: DataTypes.STRING,
            gs_url: DataTypes.STRING,
            caption: DataTypes.STRING(10000),
            summary: DataTypes.STRING(10000),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_document_images`,
            tableName: 'document_images',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocumentsImages;
};
