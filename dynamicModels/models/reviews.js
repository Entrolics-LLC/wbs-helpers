'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Reviews.init(
        {
            proposal_review_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            proposal_id: DataTypes.STRING,
            reviewer_id: DataTypes.STRING,
            comments: DataTypes.STRING,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                type: DataTypes.DATE
            }
        },
        {
            sequelize,
            modelName: `${schema}_reviews`,
            tableName: 'reviews',
            schema,
            createdAt: false,
            updatedAt: false
        });
    return Reviews;
};