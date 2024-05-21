'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalSearchSession extends Model {
        static associate(models) {
            // define association here
        }
    }
    ProposalSearchSession.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            user_id: DataTypes.STRING,
            title: DataTypes.STRING(1098765),
            domains: DataTypes.ARRAY(DataTypes.STRING),
            di_search: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_proposal_search_session`,
            tableName: 'proposal_search_session',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalSearchSession;
};