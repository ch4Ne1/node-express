const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'administrador', '4DM1N1STR4D0R', {
    host: 'localhost',
    dialect: 'mysql',
});
async function test(){
    try{
        await sequelize.authenticate();
        console.log('conexion correcta con la BD');
    }catch(error){
        console.log('Error de conexion: ', error);
    }
}

test();
module.exports = sequelize;