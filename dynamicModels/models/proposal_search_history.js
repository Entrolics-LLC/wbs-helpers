'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalSearchHistory extends Model {
        static associate(models) {
            // define association here
        }
    }
    ProposalSearchHistory.init(
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
            modelName: `${schema}_proposal_search_history`,
            tableName: 'proposal_search_history',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalSearchHistory;
};