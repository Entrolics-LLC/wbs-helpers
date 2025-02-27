'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiSessionFile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiSessionFile.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            genai_id: DataTypes.STRING,
            file_name: DataTypes.STRING(8192),
            file_type: DataTypes.STRING,
            file_size: DataTypes.INTEGER,
            gs_url: DataTypes.STRING,
            status: DataTypes.STRING, 
            is_selected: {
                type: DataTypes.DATE
            },
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
            modelName: `${schema}_genai_session_files`,
            tableName: 'genai_session_files',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiSessionFile;
}
