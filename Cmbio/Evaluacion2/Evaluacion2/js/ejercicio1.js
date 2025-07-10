//4.1 Cargar un arreglo de objetos con datos de estudiantes y mostrar el promedio general usa.

const estudiantes = [
    { nombre: "Roy", nota: 85 },
    { nombre: "Bryan", nota: 90 },
    { nombre: "Gerson", nota: 78 },
    { nombre: "Pablo", nota: 92 }
];

const calcularPromedio = (estudiantes) => {
    let total = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        total += estudiantes[i].nota;
    }
    return total / estudiantes.length;
};

console.log("El promedio es: " + calcularPromedio(estudiantes).toFixed(2));
