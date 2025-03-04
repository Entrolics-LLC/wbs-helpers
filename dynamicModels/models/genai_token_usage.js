'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GenaiTokenUsage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GenaiTokenUsage.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            genai_id: DataTypes.STRING,
            used_tokens: DataTypes.INTEGER,
            tokens_limit: DataTypes.INTEGER,
            model_name: DataTypes.STRING,
            status: DataTypes.STRING,
            is_nearing_limit: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            updated_at: {
                type: DataTypes.DATE
            },
            created_at: {
                type: DataTypes.DATE
            },
        },
        {
            sequelize,
            modelName: `${schema}_genai_token_usage`,
            tableName: 'genai_token_usage',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GenaiTokenUsage;
}
