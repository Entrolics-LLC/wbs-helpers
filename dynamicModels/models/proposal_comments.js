'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class ProposalSectionsHighlight extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProposalSectionsHighlight.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        user_id: DataTypes.STRING,
        proposal_id: DataTypes.STRING,
        file_id: DataTypes.STRING,
        section_c: DataTypes.STRING(109765),
        section_l: DataTypes.STRING(109765),
        section_m: DataTypes.STRING(109765),
        section_c_position: DataTypes.JSONB,
        section_l_position: DataTypes.JSONB,
        section_m_position: DataTypes.JSONB,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        }
    },
        {
            sequelize,
            modelName: `${schema}_proposal_sections_higlight`,
            tableName: 'proposal_sections_higlight',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return ProposalSectionsHighlight;
};