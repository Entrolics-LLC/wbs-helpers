'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class DiSearch_Matrices_questions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DiSearch_Matrices_questions.init({
        question_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        question: DataTypes.STRING,
        answer_type: DataTypes.STRING,
        prompt: DataTypes.STRING(100000),
        domains: DataTypes.ARRAY(DataTypes.STRING),
        file_ids: DataTypes.ARRAY(DataTypes.STRING),
        project_id: DataTypes.STRING,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    },
        {
            sequelize,
            modelName: `${schema}_disearch_matrices_questions`,
            tableName: 'disearch_matrices_questions',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return DiSearch_Matrices_questions;
};