let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = []

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)), 0];

}

const tomarAsistencia = (nombre,presencia) =>{
    let presencia = prompt(`¿Ha asistido ${nombre}?`);
    if (presencia == "p"  || presencia == "P"){
        alumnosTotales
    }
}