'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes, schema) => {
    class Organization extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Organization.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            address: DataTypes.STRING,
            website: DataTypes.STRING,
            size: DataTypes.STRING,
            status: DataTypes.STRING,
            uei: DataTypes.STRING,
            cage_code: DataTypes.STRING,
            duns_number: DataTypes.STRING,
            poc_name: DataTypes.STRING,
            title: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            tax_id: DataTypes.STRING,
            contract_number: DataTypes.STRING,
            business_size: DataTypes.STRING,
            contract_vehicles: DataTypes.ARRAY(DataTypes.STRING),
            template_id: DataTypes.STRING,
            created_by: DataTypes.STRING,
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
            modelName: `${schema}_organizations`,
            tableName: 'organizations',
            schema,
            createdAt: false,
            updatedAt: false
        });

    return Organization;
};
