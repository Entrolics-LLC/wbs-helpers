'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class TemplateQuestion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TemplateQuestion.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            session_id: DataTypes.STRING,
            field_id: DataTypes.STRING,
            question: DataTypes.STRING(109765),
            response: DataTypes.STRING(109765),
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
            modelName: `${schema}_template_question`,
            tableName: 'template_question',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return TemplateQuestion;
};
