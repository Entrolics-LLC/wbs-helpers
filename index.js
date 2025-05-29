const sequelize = require('./config/db')
module.exports = {
    ...require('./helpers'),
    sequelize
}