'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiProjectSessionFile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiProjectSessionFile.init(
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
            size_bytes: DataTypes.INTEGER,
            token_count: DataTypes.INTEGER,
            project_id: DataTypes.STRING,
            di_document_id: DataTypes.STRING,
            is_selected: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
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
            modelName: `${schema}_genai_project_session_file`,
            tableName: 'genai_project_session_file',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiProjectSessionFile;
}
