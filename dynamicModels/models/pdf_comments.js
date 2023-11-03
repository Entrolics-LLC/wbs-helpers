'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class PdfComments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PdfComments.init( {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        user_id: DataTypes.STRING,
        file_id: DataTypes.STRING,
        comment: DataTypes.JSONB,
        position: DataTypes.JSONB,
        content: DataTypes.JSONB,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    },
        {
            sequelize,
            modelName: `${schema}_pdf_comments`,
            tableName: 'pdf_comments',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return PdfComments;
};