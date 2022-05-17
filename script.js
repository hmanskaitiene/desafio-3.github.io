class Servicio {
    constructor(nombre,tarifa){
        this.nombre = nombre;
        this.tarifa = tarifa;
    }

    getNombre = () => this.nombre.toUpperCase()
}

alert("Bienvenidx. Vamos a calcular cuanto gasta en total por sus servicios.\nPrimero se le pedira el nombre del servicio y a continuacion la tarifa.\n\nPara finalizar ingrese TERMINAR");
let servicio_nombre = prompt("Ingrese el nombre del servicio");
let servicios = [];
if (servicio_nombre !== null){
    while (servicio_nombre.toUpperCase() != "TERMINAR") {
        if (servicio_nombre.length > 0) {
            let servicio_tarifa;
            do {
                servicio_tarifa = prompt("Ingrese la tarifa del servicio. Ingrese sólo valores numericos.");
            } while (isNaN(servicio_tarifa));
            
            servicios.push(new Servicio(servicio_nombre,servicio_tarifa));
           
        }

        servicio_nombre = prompt("Ingrese el nombre del servicio");
    }
    if (servicios.length > 0){
        document.write("<h3>Sus consumos son:</h3>");
        document.write(`<ul>`);
        let acumulador_gastos = 0;
        servicios.forEach(servicio => {
            document.write(`<li>${servicio.getNombre()} $ ${servicio.tarifa}</li>`);
            acumulador_gastos += parseFloat(servicio.tarifa);
        });
        document.write(`</ul>`);
        document.write(`<h3>El total de gastos es $ ${acumulador_gastos.toFixed(2)}</h3>`)

        const ultimo_servicio = servicios.pop()
        document.write(`<h4>Si quitamos el último servicio el total sería $ ${ (acumulador_gastos - ultimo_servicio.tarifa).toFixed(2) }</h4>`)
    
    } else {
        document.write(`<h3>No tiene consumos</h3>`)
    }
}


document.write("<h5>Para ingresar nuevamente, refresque la página.</h5>");