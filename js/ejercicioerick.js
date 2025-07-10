

let notaFinal = parseFloat(prompt("Ingrese la nota final del estudiante:"));
let clasesAsistidas = parseInt(prompt("Ingrese el número de clases asistidas (de 40 minimas):"));
let faltasDisciplinarias = parseInt(prompt("Ingrese el número de faltas disciplinarias cometidas:"));



let asistenciaRequerida = 40 * 0.80; 


if(notaFinal >= 7 && clasesAsistidas >= asistenciaRequerida && faltasDisciplinarias <= 2 ){
    alert("El estudiante aprobo");
} else {
    alert("El estudiante reprobo");
}
