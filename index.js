const pessoas = [
  { nome: "Sergio", sobrenome: "Bernardi", idade: 28 },
  { nome: "Ana", sobrenome: "Silva", idade: 12 },
  { nome: "Jhon", sobrenome: "Doe", idade: 19},
  { nome: "Jhon", sobrenome: "Doe", idade: 10 },
];

const maiorIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

const somarIdades = pessoas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.idade
}, 0);

console.log(somarIdades);
console.log(pessoas);