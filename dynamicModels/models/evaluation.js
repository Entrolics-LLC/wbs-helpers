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
            history_id: DataTypes.STRING(1098765),
            eval_type: DataTypes.STRING(1098765),
            evaluation_name: DataTypes.ARRAY(DataTypes.STRING),
            description: DataTypes.STRING(1098765),
            eval_response: DataTypes.JSONB,
            is_deleted: DataTypes.BOOLEAN,
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
