'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Template extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Template.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING(109765),
            description: DataTypes.STRING(109765),
            icon: DataTypes.STRING(109765),
            prompt: DataTypes.STRING(109765),
            type: DataTypes.ARRAY(DataTypes.STRING),
            user_id: DataTypes.STRING,
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
            modelName: `${schema}_template`,
            tableName: 'template',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Template;
};
