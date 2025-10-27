'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Domain extends Model {
        static associate(models) {
            // define association here
        }
    }
    Domain.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            domain: DataTypes.STRING,
            description: DataTypes.STRING(1098765),
            parent_domain: DataTypes.STRING,
            created_by: DataTypes.STRING,
            guest_id: DataTypes.STRING,
            organization_id : DataTypes.STRING,
            is_deleted: DataTypes.BOOLEAN,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_domains`,
            tableName: 'domains',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Domain;
};