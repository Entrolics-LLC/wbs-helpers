'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Editor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Editor.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            project_name: DataTypes.STRING(100000),
            output: DataTypes.JSONB,
            parent_id: DataTypes.STRING,
            shared_with: DataTypes.ARRAY(DataTypes.STRING),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_default: {
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
            modelName: `${schema}_editor`,
            tableName: 'editor',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Editor;
};
