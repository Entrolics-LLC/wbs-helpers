'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Setting.init(
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model: DataTypes.STRING(255),
            start_prompt: DataTypes.STRING(10000),
            end_prompt: DataTypes.STRING(10000),
            bot_name: DataTypes.STRING(10000),
            hide_context_prompts: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            use_global_config: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            lmn_model: DataTypes.STRING(10000),
            temperature: DataTypes.INTEGER,
            top_p: DataTypes.INTEGER,
            max_tokens: DataTypes.INTEGER,
            presence_penalty: DataTypes.INTEGER,
            frequency_penalty: DataTypes.INTEGER,
            inject_sys_prompts: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            input_template: DataTypes.STRING,
            custom_instruction_id: DataTypes.STRING,
            attached_messages_count: DataTypes.INTEGER,
            history_compression_threshold: DataTypes.INTEGER,
            inject_sys_prompts: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_section: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_settings`,
            tableName: 'settings',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return Setting;
}
