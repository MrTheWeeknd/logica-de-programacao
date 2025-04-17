const notas = [10, 6, 8, 5.5, 10];

notas.pop();
console.log(notas);

const media = (notas[notas.length - 1] + notas[0] + notas[1] + notas[2]) / notas.length;
console.log(media.toFixed(2)); 