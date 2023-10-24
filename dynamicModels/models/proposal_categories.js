'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalCategory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalCategory.init(
        {
            category_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            category_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: `${schema}_proposal_categories`,
            tableName:'proposal_categories',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalCategory;
};