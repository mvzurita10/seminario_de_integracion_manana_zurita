// Concepto puro
class MonitorEstres {
    private _nivel: number;

    constructor(nivelInicial: number) {
        this._nivel = nivelInicial;
    }

    get nivel(): number {
        return this._nivel;
    }

    set nivel(valor: number) {
        if (valor < 0 || valor > 10) throw new Error("El nivel de estrés debe estar entre 0 y 10");
        this._nivel = valor;
    }

    get estadoRiesgo(): string {
        return this._nivel >= 8 ? "Alto Riesgo" : "Controlable";
    }
}

const monitorEstres = new MonitorEstres(5);
console.log(monitorEstres.nivel);          // 5   ← usa el getter
console.log(monitorEstres.estadoRiesgo);   // Controlable

monitorEstres.nivel = 9;                   // usa el setter
console.log(monitorEstres.estadoRiesgo);   // Alto Riesgo

// monitorEstres.nivel = 12;  // Error: El nivel de estrés debe estar entre 0 y 10