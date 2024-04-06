'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class searchSession extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    searchSession.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        user_id: DataTypes.STRING,
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'search_session',
        createdAt: false,
        updatedAt: false
    });
    return searchSession;
};