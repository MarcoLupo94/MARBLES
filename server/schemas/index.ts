// TODO REORGANIZE AND RENAME
const Sequelize = require('sequelize');

const connection = new Sequelize('marbles', 'admin', 'codeworks', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const box: any = {};

box.user = require('./user')(connection, Sequelize.DataTypes);
box.habit = require('./habit')(connection, Sequelize.DataTypes);


box.user.hasMany(box.habit, {
  foreignKey: 'userId'
});


box.connection = connection;

export {box};
