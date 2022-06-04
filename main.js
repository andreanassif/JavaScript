debugger

let sueldo = parseInt (prompt("Ingrese su mejor sueldo neto de los últimos 6 meses "))
let diasTrabajados = parseInt (prompt("Ingrese los dìas trabajados en el último semestre"))

function sac (sueldo, diasTrabajados) {
    let resultado = sueldo / 2 / 180 * diasTrabajados;
    alert("Tu SAC es: $ " + resultado);
}
