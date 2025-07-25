'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class customInstructions extends Model {
        static associate(models) {
            // define association here
        }
    }
    customInstructions.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            user_id: DataTypes.STRING,
            genai_type_id: DataTypes.STRING,
            category: DataTypes.STRING,
            start_prompt: DataTypes.STRING(1098765),
            end_prompt: DataTypes.STRING(1098765),
            tone: DataTypes.ARRAY(DataTypes.STRING),
            shared_with: DataTypes.ARRAY(DataTypes.STRING),
            llm_model: DataTypes.JSONB,
            is_section: {
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
            modelName: `${schema}_custom_instruction`,
            tableName: 'custom_instruction',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return customInstructions;
};
