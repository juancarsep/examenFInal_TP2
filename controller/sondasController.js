import sondasService from '../service/sondasService.js';


class sondasController{
    constructor(){
        this.servicio = new sondasService();
    }

    obtenerSondas = async (req, res) => {        
        const sondas = await this.servicio.obtenerSondas();
        res.json(sondas);
    }

    obtenerSonda = async (req, res) => {
        const {id} = req.params;
        const sonda = await this.servicio.obtenerSonda(id);
        res.json(sonda);
    }

    cargarSonda = async (req, res) => {
        const sonda = req.body;
        const sondaGuardada = await this.servicio.guardarSonda(sonda);
        res.json(sondaGuardada);

    }

    actualizarSonda = async (req, res) => {
        const {id} = req.params;
        const sonda = req.body;
        const sondaActualizada = await this.servicio.actualizarSonda(id, sonda);
        res.json(sondaActualizada);
    }

    eliminarSonda = async (req, res) => {
        const {id} = req.params;
        const sondaEliminada = await this.servicio.eliminarSonda(id);
        res.json(sondaEliminada);
    }
}

export default sondasController;