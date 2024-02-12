/*
Solicitar uma entrada através de prompt, manipular o valor a cada repetição, 
	realizando uma saída para cada resultado, até que digite “sair”.
Inserir valores, e exibir resultados de soma e média a cada novo valor inserido.
*/

let loop = true;

while(loop) {
	let n = parseInt(prompt("Insira uma funcionalidade:\n1 - Valor das parcelas de uma compra qualquer\n2 - Calculadora infinita\n0 - Encerrar o script"));
	switch (n) {
		case 1: {
			parcelas();
			break;
		}
		case 2:{
			calcula();
			break;
		}
		case 0: {
			alert("Tchau ( ﾟдﾟ)つ Bye");
			loop = false;
			break;
		}
	}
}

function parcelas() {
	let valor = parseFloat(prompt("Insira o valor da compra:"));
	let vezes = parseInt(prompt("Insira a quantia de parcelas:"));
	let parcela = (valor/vezes).toFixed(2);
	let saida = `${valor} em ${vezes} vezes fica:\n`;

	for(let x = 1; x <= vezes; x++) {
		if(x < 4) {
			saida = saida.concat(` ${x} - ${parcela}\n`);		
		} else {
			parcela = ((parcela*120)/100).toFixed(2);
			saida = saida.concat(` ${x} - ${parcela}\n`);		
		}
	}
	alert(saida.concat("Obs.: Acima de 3 vezes as parcelas terão 20% de juros cumulativos."))
}

function calcula() {	
	let valorInicial = parseFloat(prompt("Insira um valor:"));
	let loop = true;
	let primeiraExec = true;
	let acumulado = 0;
	let continuar = 1;

	while (loop) {
		let valorNovo = parseFloat(prompt("Insira um outro valor:"));
		let op = prompt("Insira uma operação aritmética (+, -, *, /):");

		switch(op) {
			case "+": {
				if(primeiraExec) {
					acumulado = valorNovo + valorInicial
					primeiraExec = false
				} else {
					acumulado += valorNovo
				}
				break;
			}
			case "-": {
				if(primeiraExec) {
					acumulado = valorNovo - valorInicial
					primeiraExec = false
				} else {
					acumulado -= valorNovo
				}
				break;
			}
			case "*": {
				if(primeiraExec) {
					acumulado = valorNovo * valorInicial
					primeiraExec = false
				} else {
					acumulado *= valorNovo
				}
				break;
			}
			case "/": {
				if(primeiraExec) {
					acumulado = valorNovo / valorInicial
					primeiraExec = false
				} else {
					acumulado /= valorNovo
				}
				break;
			}
		}

		alert(`Valor obtido até o momento = ${acumulado.toFixed(2)}`)
		continuar = parseInt(prompt("Continuar?\n1 - Sim\n2 - Não"))
		if(continuar == 2) {			
			loop = false;
		}
	}
}