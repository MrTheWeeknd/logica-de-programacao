const pessoa = {
    nome: "Lucas",
    idade: 23,
    solteiro: false, 
    hobbies: ["programar", "ler", "jogar"]
}

function mostrarDadosPessoa(objetoAlguem) {
    for(let i = 0; i < objetoAlguem.length; i++){
        console.log(objetoAlguem[i]);
    }
}   

console.log(mostrarDadosPessoa(pessoa));