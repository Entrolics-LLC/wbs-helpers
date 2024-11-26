'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SearchEvaluationHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    SearchEvaluationHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING(1098765),
            history_id: DataTypes.STRING(1098765),
            evaluation_name: DataTypes.ARRAY(DataTypes.STRING),
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
            modelName: `${schema}_search_evaluation_history`,
            tableName: 'search_evaluation_history',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return SearchEvaluationHistory;
};
