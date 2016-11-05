// Database set up
// Ref: http://docs.sequelizejs.com/en/latest/docs/getting-started/
// Ref on localhost URI: http://stackoverflow.com/questions/3582552/postgres-connection-url

// Notes to set up local database:
// a) Download Postgres App from http://postgresapp.com/
// b) Start local database from the Postgres Desktop app
// c) In the PostgresSQL shell, enter 'CREATE DATABASE phodome;'
// c) start server using 'node app.js'

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://postgres:password@54.244.57.125:5432/phodome');

module.exports = db;