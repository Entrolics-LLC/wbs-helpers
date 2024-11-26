'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SummaryEvaluationHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    SummaryEvaluationHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING(1098765),
            history_id: DataTypes.STRING(1098765),
            evaluation_name: DataTypes.ARRAY(DataTypes.STRING),
            summary_response : DataTypes.JSONB,
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
            modelName: `${schema}_summary_evaluation_history`,
            tableName: 'summary_evaluation_history',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return SummaryEvaluationHistory;
};
