'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class FeedbackdiSearch extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    FeedbackdiSearch.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id: DataTypes.STRING,
            feedback_object_id: DataTypes.STRING,
            object_reference_id: DataTypes.STRING,
            rating: DataTypes.INTEGER,
            comment: DataTypes.STRING(1098765),
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
            modelName: `${schema}_di_feedback`,
            tableName: 'di_feedback',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return FeedbackdiSearch;
};