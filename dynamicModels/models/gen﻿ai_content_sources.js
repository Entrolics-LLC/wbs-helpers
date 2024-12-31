'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class GENAI_CONTENT_SOURCES extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    GENAI_CONTENT_SOURCES.init(
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            genai_id: DataTypes.UUID,
            source_type: DataTypes.STRING(255),
            source: DataTypes.STRING(255),
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
            modelName: `${schema}_genai_content_sources`,
            tableName: 'genai_content_sources',
            schema,
            createdAt: false,
            updatedAt: false
        })
    return GENAI_CONTENT_SOURCES;
}
