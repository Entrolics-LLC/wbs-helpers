'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Reviews.init(
        {
            answer_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            question_text: DataTypes.STRING(109654),
            answer_text: DataTypes.JSONB,
            reference_text: DataTypes.STRING(109654),
            proposal_question_id: DataTypes.STRING,
            contributors: DataTypes.ARRAY(DataTypes.STRING),
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_answer_histories`,
            tableName: 'answer_histories',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Reviews;
};
