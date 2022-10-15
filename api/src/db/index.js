export const  db = new Sequelize( 'postgres://postgres:ccolnm01@localhost:5432/videogames', {force: true, logging:false} ); //?
// module.exports = db;
// aka conn, sequelize
//let connection_string = 'postgres://postgres:ccolnm01@localhost:5432/simpsons_sequelize';
// const db = new Sequelize( `postgres://${postgres_user}:${postgres_pwd}@${postgres_host}:5432/${postgres_database}`, {force:true, logging:false}); //?