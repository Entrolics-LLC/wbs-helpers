'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SearchHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    SearchHistory.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            session_id: DataTypes.STRING,
            question: DataTypes.STRING(1098765),
            answer: DataTypes.STRING(1098765),
            filter_domains: DataTypes.ARRAY(DataTypes.STRING),
            recommended_questions: DataTypes.ARRAY(DataTypes.STRING),
            files: DataTypes.ARRAY(DataTypes.STRING),
            chart_meta_data: DataTypes.JSONB,
            table_name: DataTypes.STRING,
            answer_session_id: DataTypes.STRING,
            total_count: DataTypes.INTEGER,
            error_response:DataTypes.STRING,
            is_error: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: `${schema}_search_history`,
            tableName: 'search_history',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return SearchHistory;
};