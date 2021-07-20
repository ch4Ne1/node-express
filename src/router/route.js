const pag_controller = require('./../controller/pagina_controller');
function rutas(app){
    app.get('/', pag_controller.inicio);
    app.get('/servicios', pag_controller.servicio);
    app.get('/contactos', pag_controller.contacto);
}
module.exports.rutas = rutas;

