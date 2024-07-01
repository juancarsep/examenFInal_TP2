class sondasModel {

    sondas = [];

    constructor() {
        this.sondas = [
            { id: "1", temperatura: 34 },
            { id: "2", temperatura: 34 },
            { id: "3", temperatura: 34 },
            { id: "4", temperatura: 34 },
            { id: "5", temperatura: 34 },

        ]
    }

    obtenerSondas = () => this.sondas;

    obtenerSonda = async id => {
        const sonda = await this.sondas.find(sonda => sonda.id === id);
        return sonda || {};
    }

    guardarSonda = sonda => {
        const id = parseInt(sonda.id, 10);

        if (id < 1 || id > 5) {
            throw new Error("La id debe estar entre 1 y 5");
        }

        const sondaConFecha = {
            ...sonda,
            fecha: new Date().toLocaleString()
        };

        this.sondas.push(sondaConFecha);

        return sondaConFecha;
    }

    actualizarSonda = (id, sonda) => {
        const index = this.sondas.findIndex(sonda => sonda.id === id);
        if (index != -1) {
            const sondaAnt = this.sondas[index];
            const sondaAct = { ...sondaAnt,
                 ...sonda,
                fecha: new Date().toLocaleString() };
            this.sondas.splice(index, 1, sondaAct);
            return sondaAct;
        } else {
            return {};
        }
    }

    eliminarSonda = id => {
        let sonda = {}
        const index = this.sondas.findIndex(sonda => sonda.id === id);
        if (index != -1) {
            sonda = this.sondas.splice(index, 1)[0];
        }
        return sonda;
    }
}

export default sondasModel;