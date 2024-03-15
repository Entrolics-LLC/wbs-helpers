'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GlobalSetting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GlobalSetting.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model: DataTypes.STRING(255),
            temperature:{
                type: DataTypes.FLOAT,
                defaultValue: 0.9
            },
            max_tokens: DataTypes.INTEGER,
            max_words: DataTypes.INTEGER,
            top_k: DataTypes.INTEGER,
            section_parsing: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            section_retreive: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: `${schema}_global_settings`,
            tableName: 'global_settings',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GlobalSetting;
}
