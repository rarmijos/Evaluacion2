const estudiantes = [
    { nombre: "Ana", nota: 8.5 },
    { nombre: "Luis", nota: 7.0 },
    { nombre: "Carlos", nota: 9.2 },
    { nombre: "Marta", nota: 6.8 },
    { nombre: "Elena", nota: 7.5 }
];

const sumaNotas = estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
const promedio = sumaNotas / estudiantes.length;

document.getElementById("resultado").textContent = `El promedio general es: ${promedio.toFixed(2)}`;
