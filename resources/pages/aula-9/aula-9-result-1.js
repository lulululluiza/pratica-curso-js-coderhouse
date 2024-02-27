let array = [];

for (let x = 0; x<5; x++) {
	array.push(prompt("Insira uma cor (esse prompt surgirá 5 vezes ;) ):"));
}

console.log(`Array completo: ${array}`);
console.log(`Tamanho do array: ${array.length}`);

alert(`O array "${array}" possui tamanho ${array.length}`);

let loop = true
let remover = ""

while(loop) {
	remover = prompt(`Insira o nome da cor a ser removida do array: "${array}"`);
	if( !(array.includes(remover)) ) {
		alert(`Insira uma cor presente no array :/ = "${array}"`);
	} else {
		array.splice(array.indexOf(remover), 1);
		loop = false;
	}
}

alert(`Situação atual do array: ${array}`);
for(let y = 0; y<array.length; y++) {
	alert(`Na posição ${y} temos a cor ${array[y]}`)
}


/*
Peça para o usuário inserir uma nova cor e verifique se a cor já existe no array, caso ela já exista, 
não faça nada. Caso ainda não exista, insira na primeira posição.*/
let novaCor = "";
let sn = 1;
loop = true;

while(loop) {
	novaCor = prompt(`Insira uma nova cor para adicionar ao array:`);
	if(array.includes(novaCor)) {
		alert(`O array já possui essa cor :/`);

		sn = parseInt(prompt(`Deseja inserir outra cor? \n1- Sim \n2- Não`));
		if(sn == 2) {
			loop = false;
		}
	} else {
		array.push(novaCor);
		loop = false;
	}
}

alert(`Estado final do array: ${array}`);
alert(`( ﾟдﾟ)つ Bye`)