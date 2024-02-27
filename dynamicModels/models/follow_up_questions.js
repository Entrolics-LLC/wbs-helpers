'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class FollowUpQuestions extends Model {
        static associate(models) {
            // define association here
        }
    }
    FollowUpQuestions.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            search_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
            question: DataTypes.STRING(100000),
            answer: DataTypes.STRING(100000),
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_follow_up_questions`,
            tableName: 'follow_up_questions',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return FollowUpQuestions;
};