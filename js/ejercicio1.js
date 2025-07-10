//4.1 Cargar un arreglo de objetos con datos de estudiantes y mostrar el promedio general usando flechas.
const estudiantes = [
    { nombre: "Juan", nota: 85 },
    { nombre: "Maria", nota: 90 },
    { nombre: "Pedro", nota: 78 },
    { nombre: "Ana", nota: 92 }
];

const promedio = estudiantes.reduce((acc, estudiante) => acc + estudiante.nota, 0) / estudiantes.length;

console.log(`El promedio general es: ${promedio}`);