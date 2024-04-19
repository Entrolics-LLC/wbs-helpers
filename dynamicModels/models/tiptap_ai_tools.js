'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class TiptapAITools extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TiptapAITools.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING(109765),
            icon: DataTypes.STRING,
            description: DataTypes.STRING(109765),
            prompt: DataTypes.STRING(109765),
            child: DataTypes.ARRAY(DataTypes.JSONB),
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
            modelName: `${schema}_tiptap_ai_tools`,
            tableName: 'tiptap_ai_tools',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return TiptapAITools;
};
