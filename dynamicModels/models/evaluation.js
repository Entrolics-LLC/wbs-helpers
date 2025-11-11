'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Evaluation extends Model {
        static associate(models) {
            // define association here
        }
    }
    Evaluation.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING(1098765),
            config_user_id: DataTypes.STRING(1098765),
            evaluation_name: DataTypes.STRING(1098765),
            eval_type: DataTypes.STRING(1098765),
            history_id: DataTypes.ARRAY(DataTypes.STRING(1098765)),
            description: DataTypes.STRING(1098765),
            status: DataTypes.STRING(1098765),
            eval_response: DataTypes.JSONB,
            threshold: DataTypes.FLOAT,
            is_uploaded: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            row_count: DataTypes.INTEGER,
            mean_score: {
                type: DataTypes.DECIMAL(16, 14),
            },
            std_score: {
                type: DataTypes.DECIMAL(16, 14),
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
            modelName: `${schema}_evaluation`,
            tableName: 'evaluation',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return Evaluation;
};

