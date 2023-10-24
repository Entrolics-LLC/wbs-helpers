'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
        project_name: DataTypes.STRING,
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
            modelName: 'matrices_project',
            schema: 'pensdown',
            createdAt: false,
            updatedAt: false
        });
    return Matrices_project;
};