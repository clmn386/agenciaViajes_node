import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    // para evitar que se bloqueen las consultas a otras consultas 
    // creamos un arreglo con las consultas a la BD para arranquen al mismo tiempo
    
    const consultaDB = [];
    consultaDB.push(Viaje.findAll({limit:3}))
    consultaDB.push(Testimonial.findAll({limit:3}))
    // consultar tres viajes del modelo viaje
    try{

        const resultado = await Promise.all(consultaDB)
        res.render('inicio',{
            pagina: 'Inicio',
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    }catch(error){
        console.log(error)
    }
}

const paginaNosotros = (req,res) => {
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}


const paginaViajes = async (req,res) => {
    // consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Pròximos Viajes',
        viajes,
    })
}

const paginaTestimoniales = async (req,res) => {
    try{
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
        });

    }catch(error){
        console.log(error)
    }

    
}

// muestra un viaje por tu slug
const paginaDetalleViajes = async (req,res) => {
    const {slug} = req.params;
    try{
        const resultado = await Viaje.findOne({where:{slug}});
        res.render('viaje',{
            pagina: 'Informacion Viajes',
            resultado
        })
    }catch(error){
        console.log(error)
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes
}