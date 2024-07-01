import sondasModel from '../model/sondasModel.js'

class sondasService {
    modelo = null;

    modelo = new sondasModel();

    obtenerSondas = async _ => {
        const sondas = await this.modelo.obtenerSondas();
        return sondas || {};
    }

    obtenerSonda = async id => {
        const sonda = await this.modelo.obtenerSonda(id);
        if (id >= 1 && id <= 5) {
            return sonda || {};
        }else{
            return "Número de sonda incorrecto"
        }
    }

    guardarSonda = async sonda => {
        await this.modelo.guardarSonda(sonda);
        return sonda;
    }

    actualizarSonda = async (id, sonda) => {
        const sondaActualizada = await this.modelo.actualizarSonda(id, sonda);
        return sondaActualizada;
    }

    eliminarSonda = async id => {
        const sondaEliminada = await this.modelo.eliminarSonda(id);
        return sondaEliminada;
    }

}

export default sondasService;