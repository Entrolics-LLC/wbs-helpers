'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class SearchSummary extends Model {
        static associate(models) {
            // define association here
        }
    }
    SearchSummary.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            search_id: DataTypes.STRING,
            answer: DataTypes.STRING(1098765),
            documents: DataTypes.ARRAY(DataTypes.STRING),
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_search_summary`,
            tableName: 'search_summary',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return SearchSummary;
};