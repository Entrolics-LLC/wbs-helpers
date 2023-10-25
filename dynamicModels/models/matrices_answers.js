'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Matrices_answers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Matrices_answers.init({
        answer_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        requirement_id: DataTypes.STRING,
        question_id: DataTypes.STRING,
        answer: DataTypes.STRING(100000),
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    },
        {
            sequelize,
            modelName: `${schema}_matrices_answers`,
            tableName: 'matrices_answers',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Matrices_answers;
};