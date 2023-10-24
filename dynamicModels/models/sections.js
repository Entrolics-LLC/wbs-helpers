'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Sections extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Sections.init(
        {
            section_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            section_name: DataTypes.STRING,
            parent_id: DataTypes.STRING,
            section_no: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            section_no: DataTypes.STRING
        },
        {
            sequelize,
            modelName: `${schema}_sections`,
            tableName: 'sections',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Sections;
};