'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalTypes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalTypes.init(
        {
            type_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            type_name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: `${schema}_proposal_types`,
            tableName: 'proposal_types',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalTypes;
};