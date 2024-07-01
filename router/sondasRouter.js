import express from 'express';
import sondasController from '../controller/sondasController.js'

class SondasRouter{
    router = null
    constructor(){
        this.router = express.Router();
        this.controlador = new sondasController();
    }

    start(){
        this.router.get('/', this.controlador.obtenerSondas);
        this.router.get('/:id', this.controlador.obtenerSonda);
        this.router.post('/', this.controlador.cargarSonda);
        this.router.put('/:id', this.controlador.actualizarSonda);
        this.router.delete('/:id', this.controlador.eliminarSonda);

        
        return this.router;
    }
}

export default SondasRouter;