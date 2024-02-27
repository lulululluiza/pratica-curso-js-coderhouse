/*Receba nomes pelo prompt e insira todos em um array até que o usuário digite “fim”.
Ao finalizar, percorra o array usando o “for”e exiba todos os nomes no console.
Não insira a palavra “fim” no array.
*/


let entrada = "";
let array = [];

while(entrada.toLowerCase() != "fim") {	
	entrada = prompt(`Insira nomes para incluir em um array: (ou Fim para sair)`);
	array.push(entrada);
}
array.pop();

alert(`Palavras inseridas no array:`);

for(let x=0; x<array.length; x++) {
	alert(`${array[x]}`);
	console.log(`${array[x]}`);
}