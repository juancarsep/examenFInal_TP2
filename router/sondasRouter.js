import express from 'express';
import sondasController from '../controller/sondasController.js'

class SondasRouter{
    router = null
    constructor(){
        this.router = express.Router();
        this.controlador = new controlador();
    }

    start(){
        this.router.get('/', this.sondasController.obtenerSondas); //------------------- OK
        this.router.get('/:id', this.sondasController.obtenerSonda); //---------------- OK
        this.router.post('/', this.sondasController.cargarSonda); //------------------- OK
        this.router.put('/:id', this.sondasController.actualizarSonda); //------------------- OK
        this.router.post('/:id', this.sondasController.eliminarSonda); //------------------- OK

        
        return this.router;
    }
}

export default sondasController;