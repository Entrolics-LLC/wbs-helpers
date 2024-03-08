'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class proposalTemplate extends Model {
        static associate(models) {
            // define association here
        }
    }
    proposalTemplate.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            template_name: DataTypes.STRING,
            section_l: DataTypes.STRING(1098765),
            section_m: DataTypes.STRING(1098765),
            section_c: DataTypes.STRING(1098765),
            description: DataTypes.STRING(1098765),
            type: DataTypes.STRING,
            created_by: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_proposal_template`,
            tableName: 'proposal_template',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return proposalTemplate;
};
