'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Proposal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Proposal.init(
        {
            proposal_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            proposal_name: DataTypes.STRING,
            dollar_value: DataTypes.INTEGER,
            model_name: DataTypes.STRING,
            contributors: DataTypes.ARRAY(DataTypes.STRING),
            proposal_manager: DataTypes.ARRAY(DataTypes.STRING),
            file_url: DataTypes.STRING,
            gs_urls: DataTypes.ARRAY(DataTypes.STRING),
            background: DataTypes.STRING(10485760),
            xml: DataTypes.STRING(10485760),
            api_key: DataTypes.STRING,
            status: DataTypes.STRING,
            proposal_type: DataTypes.STRING,
            category_type: DataTypes.ARRAY(DataTypes.STRING),
            team_id: DataTypes.ARRAY(DataTypes.STRING),
            section_c: DataTypes.STRING(10485760),
            section_m: DataTypes.STRING(10485760),
            section_l: DataTypes.STRING(10485760),
            outline_response: DataTypes.STRING(10485760),
            poc: DataTypes.STRING(10485760),
            poc_email: DataTypes.STRING,
            poc_phone: DataTypes.STRING,
            organization_id: DataTypes.STRING,
            // template_id: DataTypes.ARRAY(DataTypes.STRING),
            contract_vehicles: DataTypes.ARRAY(DataTypes.STRING),
            created_by: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            submission_date: {
                type: DataTypes.DATE
            },
            expiry_date: {
                type: DataTypes.DATE
            },
            teams_date_range: DataTypes.JSONB,
            reviewers: DataTypes.JSONB,
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_proposals`,
            tableName: 'proposals',
            schema,
            createdAt: false,
            updatedAt: false
        });

    return Proposal;
};
