'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class PensdownPrompt extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    PensdownPrompt.init({
        prompt_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        prompt_name: DataTypes.STRING,
        prompt_page: DataTypes.STRING,
        prompt_value: DataTypes.STRING(10000),
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        updated_at: {
            type: DataTypes.DATE
        },
    },
        {
            sequelize,
            modelName: `${schema}_pensdown_prompts`,
            tableName: 'pensdown_prompts',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return PensdownPrompt;
};