const listaEstudantes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Fernanda', 'Carlos', 'Juliana', 'Roberto', 'Patrícia'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length / 2, listaEstudantes.length);

console.log(`Sala 1: ${sala1}`);
console.log(`Sala 2: ${sala2}`);   
