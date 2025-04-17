const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const notasClonadas = [...notas, 25]; // o spread operator clona um array, porém faz com que ocupem espaços diferentes na memória, ou seja, se eu alterar um valor em um array, o outro não será alterado.

// notasClonadas.push(25);

// posso adicionar o novo valor tanto com o push quanto inserindo como parâmetro.
console.log(notas);
console.log(notasClonadas);



