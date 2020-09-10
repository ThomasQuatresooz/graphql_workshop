const mariadb = require('mariadb');
const Sequelize = require('sequelize');
const _ = require('lodash');
const casual = require('casual');

mariadb
  .createConnection({ host: 'localhost', user: 'root', password: 'root' })
  .then((conn) => {
    conn.query('CREATE DATABASE IF NOT EXISTS NoteQL');
  })
  .catch((err) => {
    console.log(err);
  });

const sequelize = new Sequelize('mariadb://root:root@localhost:3306/NoteQL', {
  logging: false,
  dialectOptions: {
    useUTC: false, //for reading from database
  },
  timezone: '+02:00',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const userModel = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const noteModel = sequelize.define('note', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: Sequelize.STRING,
});

userModel.hasMany(noteModel);
noteModel.belongsTo(userModel);

// create mock data with a seed, so we always get the same
casual.seed(123);

sequelize
  .sync({ force: true })
  .then(async () => {
    _.times(10, () => {
      return userModel
        .create({
          username: casual.username,
          password: casual.password,
        })
        .then((author) => {
          _.times(Math.floor(Math.random() * 10), () => {
            return noteModel.create({
              title: casual.title,
              content: casual.sentences(3),
              userId: author.id,
            });
          });
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });

const User = sequelize.models.user;
const Note = sequelize.models.note;

module.exports = { User, Note };
