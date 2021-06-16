let listaDeCompras = ['arroz', 'feijão', 'maçã', 'banana', 'brócolis'];

console.log('Compras da Abne:')

console.log(listaDeCompras);

let separadosMasJuntos = listaDeCompras.join(" e ");

console.log('\n O método ".join" une os elementos de um array em uma string utilizando um separador:');

console.log(separadosMasJuntos);

let menosUm = listaDeCompras.pop()

console.log('\n O método ".pop" elimina e retorna o último elemento do array:');

console.log('Este é o elemento excluído: ', menosUm);

let maisUm = listaDeCompras.push('espinafre');

console.log('\n O método ".push" insere N elementos no final do array e retorna a nova quantidade de elementos:');

console.log(maisUm);

let adeusArroz = listaDeCompras.shift();

console.log('\n O método ".shift" elimina e retorna o primeiro elemento do array:');

console.log('Este é o elemento excluído: ', adeusArroz);

let bemVindosDeVolta = listaDeCompras.unshift('arroz', 'brócolis')

console.log('\n Por fim, o método ".unshift" adiciona N elementos ao início do array e retorna a nova quantidade de elementos:');

console.log(bemVindosDeVolta);

console.log('\n Assim ficou a lista de compras final:')
console.log(listaDeCompras);
console.log('\n Obs.: nos métodos ".push" e ".unshift" N precisa ser maior ou igual a 1')
