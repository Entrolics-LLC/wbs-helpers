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
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
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