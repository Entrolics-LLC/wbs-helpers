'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ResponseHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    ResponseHistory.init(
        {
            search_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            response_text: DataTypes.STRING(10000),
            chatgpt_answer: DataTypes.STRING(10000),
            feedback: DataTypes.STRING,
            rating: DataTypes.INTEGER,
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_response_history`,
            tableName: 'response_history',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return ResponseHistory;
};