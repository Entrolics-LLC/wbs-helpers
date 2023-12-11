'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class AppForms extends Model {
        static associate(models) {
            // define association here
        }
    }
    AppForms.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            app_id: DataTypes.STRING,
            field_name: DataTypes.STRING,
            description: DataTypes.STRING(100000),
            field_type: DataTypes.STRING,
            answer_type: DataTypes.STRING,
            custom_instruction_id: DataTypes.STRING,
            prompt: DataTypes.STRING(100000),
            domains: DataTypes.ARRAY(DataTypes.STRING),
            file_ids: DataTypes.ARRAY(DataTypes.STRING),
            answer: DataTypes.STRING(100000),
            is_deleted: DataTypes.BOOLEAN,
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_app_forms`,
            tableName: 'app_forms',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return AppForms;
};