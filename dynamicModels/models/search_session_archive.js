'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class searchSessionArchive extends Model {
        static associate(models) {
            // define association here
        }
    }
    searchSessionArchive.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            user_id: DataTypes.STRING,
            title: DataTypes.STRING(1098765),
            llm_model: DataTypes.JSONB,
            search_type: DataTypes.STRING,
            feedback: DataTypes.STRING(1098765),
            rating: DataTypes.INTEGER,
            file_ids: DataTypes.ARRAY(DataTypes.STRING),
            di_search: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at_original: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_search_session_archive`,
            tableName: 'search_session_archive',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return searchSessionArchive;
};