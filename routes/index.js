import express from 'express';
import {
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViajes
} from '../controllers/paginasController.js';

import { guardarTestimoniales } from '../controllers/testimonialController.js';

// aqui estamos usando el router de express
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales',guardarTestimoniales)

export default router;