'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Documents extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Documents.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            file_name: DataTypes.STRING,
            parser: DataTypes.STRING,
            dag_run_id: DataTypes.STRING,
            error: DataTypes.STRING(1000),
            status: DataTypes.ARRAY(DataTypes.STRING),
            domain: DataTypes.ARRAY(DataTypes.STRING),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_documents`,
            tableName: 'documents',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Documents;
};