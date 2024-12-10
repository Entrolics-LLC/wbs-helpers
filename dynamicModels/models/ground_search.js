'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GroundSearch extends Model {
        static associate(models) {
            // define association here
        }
    }
    GroundSearch.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING(1098765),
            search_id: DataTypes.STRING(1098765),
            question: DataTypes.STRING(1098765),
            response: DataTypes.STRING(1098765),
            sources: DataTypes.JSONB,
            suggestions: DataTypes.JSONB,
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
            modelName: `${schema}_ground_search`,
            tableName: 'ground_search',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GroundSearch;
};
