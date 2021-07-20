// importando pawuetes de terceros (NPM)
const express = require('express');
// importando paquetes locales
const misrutas = require('./router/route.js');
// configurar los paquetes importados
let app = express();
// declarar variables auxiliares
let port = 3000;
let host = 'localhost';
// archivos estaticos
app.use(express.static('public'));
// habilitar motor de plantillas
app.set('views', './src/view');
// PUG
/*app.set('view engine', 'pug');*/
// HBS
/*const consolidate = require('consolidate');
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');*/
// EJS
const ejs = require('ejs');
app.set('view engine', 'ejs');
// definir rutas
/*app.get('/', (req, res) => {
    res.send('<h1>Pagina de Inicio</h1>');
});
app.get('/servicios', (req, res) => {
    res.send('<h1>Pagina de nuestros servicios</h1>');
});*/
misrutas.rutas(app);
// levantar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://${host}:${port}`);
});
