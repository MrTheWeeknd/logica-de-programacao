const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo', 'Juliana', 'Fernanda', 'Carlos', 'Juliana', 'Roberto', 'Patrícia'); //splice é um método do JS que é uma junção do pop e do push. o primeiro parâmetro é o índice que você quer começar a remover, o segundo parâmetro é quantos elementos você quer remover e o terceiro parâmetro são os elementos que você quer adicionar.
console.log(`Lista de estudantes: ${listaEstudantes}`);

