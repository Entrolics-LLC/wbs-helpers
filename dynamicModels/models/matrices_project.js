'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Matrices_project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Matrices_project.init({
        project_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        proposal_id: DataTypes.STRING,
        project_name: DataTypes.STRING,
        project_type: {
            type: DataTypes.STRING,
            defaultValue: 'Normal'
        },
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
            modelName: `${schema}_matrices_projects`,
            tableName: 'matrices_projects',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Matrices_project;
};