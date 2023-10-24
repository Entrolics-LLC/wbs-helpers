'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalContributors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalContributors.init(
        {
            proposals_contributor_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            proposal_id: DataTypes.STRING,
            user_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: `${schema}_proposals_contributors`,
            tableName: 'proposals_contributors',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalContributors;
};