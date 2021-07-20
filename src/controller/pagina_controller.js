const contacto = function(req, res){
    //res.send('<h1>Pagina de contacto</h1>');
    let lenguajes = ['Javascript', 'Java', 'PHP', 'C#', 'Python'];
    let persona = {
        nombre: 'Oscar',
        Edad: 20,
        ci: 5290570,
        direccion: 'Av. 123 Zona abc'
    };
    // aqui deberiamos consultar a la base de datos (Model)
    res.render('contactos/contactos', {lenguajes, persona});
};

const inicio = function(req, res){
    /*res.send('<h1>Pagina de Inicio</h1>');*/
    res.render('index');
};

const servicio = function(req, res){
    //res.send('<h1>Pagina de nuestros servicios</h1>');
    res.render('servicios');
}

module.exports = {
    inicio,
    contacto, 
    servicio
};