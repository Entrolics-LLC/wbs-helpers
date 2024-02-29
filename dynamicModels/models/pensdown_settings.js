'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Setting extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Setting.init(
        {
            proposal_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            model: DataTypes.STRING(255),
            temperature: DataTypes.FLOAT,
            token_size: DataTypes.INTEGER,
            willshallprompt: DataTypes.STRING(109654),
            non_repeating_prompt: DataTypes.STRING(109654),
            questionprompt: DataTypes.STRING(109654),
            answerprompt: DataTypes.STRING(109654),
            agentprompt: DataTypes.STRING(109654),
            nrprompt: DataTypes.STRING(109654),
            finetuneprompt: DataTypes.STRING(109654),
            api_key: DataTypes.STRING(1000),
            usedisearch: DataTypes.STRING(10),
            disearchserver: DataTypes.STRING(100),
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_pensdown_settings`,
            tableName: 'pensdown_settings',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Setting;
};
