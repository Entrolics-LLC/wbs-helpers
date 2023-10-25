'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Matrices_requirements extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Matrices_requirements.init({
        requirement_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        project_id: DataTypes.STRING,
        section_value: DataTypes.STRING,
        requirement_value: DataTypes.STRING(100000),
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
            modelName: `${schema}_matrices_requirements`,
            tableName: 'matrices_requirements',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Matrices_requirements;
};