import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// conectar la Base de Datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

// definir puerto
const port = process.env.PORT || 3000;

// habilitar pug
app.set('view engine','pug');

// obtener año Actual
app.use((req,res,next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
})

// Agregar body parse para leer datos formulario
app.use(express.urlencoded({extended:true}));


// Definir la Carpeta Publica
app.use(express.static('public'));

// agregar Router
app.use('/',router);

app.listen(port,()=>{
    console.log(`El servidor esta Funcionando en el puerto ${port}`)
})