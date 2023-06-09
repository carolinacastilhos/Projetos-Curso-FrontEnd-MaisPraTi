function changeParagraph() {
  document.getElementById("paragraph").innerHTML = "Texto Alterado";
  // criamos uma função em que solicitamos para no documento reconheça o elemento pelo Id (e definimos que queremos o elemento com id paragraph)
  // então indicamos com o innerHTML que queremos modificar o elemento dentro do p pelo texto que estamos atribuíndo.
}

function changeNumber(title) {
  document.getElementById("number").innerHTML = `${title}`;
}

function showAlert() {
  window.alert("Alerta");
}

// os nomes das variáveis podem ser iniciadas com _ , $ ou letras de a-z, e usamos o camelcase: inicia em minúsculo e todas as proximas palavras tem a primeira letra em maiúsculo
// não iniciamos o nome das variáveis com números com com números

//processo de hoisting com o var: a variável vai para o topo e é lida primeiro porém sem nenhum valor (var color;). Se usarmos ela e depois definirmos um valor, dará undefined e não erro,
// pq vai reconhcer que ela existe, mas não foi definida. Se não houvesse esse processo, daria erro.

//o processo de hoisting com let dá refference error.

// no let, não podemos redefinir a variável, ou seja, não é permitido: let color = "verde"; let color = "amarelo";
// oq pode-se fazer é atualiza-la: let color = "Verde"; color = "amarelo";
// no entanto ela pode ser redefinida em outro escopo.

/*Principais diferenças entre let e var: 
- var: é possível atualizar e re-declarar suas informações. Podemos acessas fora e dentro de um escopo;
- let: não é possível re-declarar, apenas atualizar. Não podemos acessas fora do nosso escopo.
*/

// o const é uma constante, não pode ser redefinida nem atualizada, tem sempre o mesmo valor que foi definido inicialmente.

/*  podemos declarar mais de uma variável em uma mesma declaração:
let moto = "honda", dono = "John", preco = 200;
Mas tem também na forma objeto: 

let carro = {
  nome: "gol",
  dono: "jhon",
  preco: 300,
};

let motos = {
  1: {
    nome: "honda",
    dono: "John",
    preco: 200,
  }, 
  2: {
    nome: "Yamaha",
    dono: "Jose",
    preco: 300,
  },
};
*/
