'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class TemplateFields extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TemplateFields.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            template_id: DataTypes.STRING,
            name: DataTypes.STRING(109765),
            description: DataTypes.STRING(109765),
            placeholder: DataTypes.STRING(109765),
            type: DataTypes.STRING(109765),
            required: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            position: DataTypes.STRING(109765),
            user_id: DataTypes.STRING,
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
            modelName: `${schema}_template_field`,
            tableName: 'template_field',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return TemplateFields;
};
