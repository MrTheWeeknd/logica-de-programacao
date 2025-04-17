const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let somaDasNotas = 0;

notas.forEach(function (nota) {
    somaDasNotas += nota;
});

console.log(somaDasNotas / notas.length); 