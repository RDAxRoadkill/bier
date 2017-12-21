/* Voor lokaal testen */
module.exports = {
    "host": 'localhost',
    "database": 'bieren',
    "user": 'bierAdmin',
    "password": '123',
    "dbport": 3306,
    "port":  process.env.PORT || 3000,
};
/* Modules voor heroku 
module.exports = {
    "host": process.env.host,
    "database": process.env.dbName,
    "user": process.env.dbUser,
    "password": process.env.dbPwd,
    "dbport": 3306,
    "port":  process.env.PORT || 3000,
}; */