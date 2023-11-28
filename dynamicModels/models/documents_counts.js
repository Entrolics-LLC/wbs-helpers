'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DocumentsCounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DocumentsCounts.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            documents_ids: DataTypes.ARRAY(DataTypes.STRING),
            total_documents_count: DataTypes.INTEGER,
            today_documents_count: DataTypes.INTEGER,
            documents_types_count: DataTypes.ARRAY(DataTypes.STRING),
            date: DataTypes.STRING,
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
            modelName: `${schema}_documents_counts`,
            tableName: 'documents_counts',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DocumentsCounts;
};