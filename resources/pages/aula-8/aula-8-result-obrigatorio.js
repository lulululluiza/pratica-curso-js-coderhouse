class Pessoa {
	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}
	descricaoPessoa() {
		return `Nome: ${this.nome} \nPeso: ${this.peso}kg \nAltura: ${this.altura}cm`
	}
	imc() {
		let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
		let retorno = ""

		if (imc <= 18.5) {
	        retorno = `${imc} => IMC abaixo do normal.`
	    } else if (imc > 18.5 && imc <= 24.9) {
	        retorno = `${imc} => IMC normal.`
	    } else if (imc > 24.9 && imc <= 29.9) {
	        retorno = `${imc} => IMC em sobrepeso.`
	    } else if (imc > 29.9 && imc <= 34.9) {
	        retorno = `${imc} => IMC em Obesidade grau I.`
	    } else if (imc > 34.9 && imc <= 39.9) {
	        retorno = `${imc} => IMC em Obesidade grau II.`
	    } else if (imc > 40) {
	        retorno = `${imc} => IMC em Obesidade grau III.`
	    }

	    return retorno
	}

}

let loopScript = true;
let loopOpcoes = true;

let pessoaNome = "";
let pessoaPeso = 0;
let pessoaAltura = 0;
let pessoa;
let imc = 0;
let op = 0;

while(loopScript) {
	pessoaNome = prompt("Insira seu nome:");
	alert(`Olá ${pessoaNome}!`);
	pessoaPeso = parseFloat(prompt("Insira seu peso (em kg):"));
	pessoaAltura = parseFloat(prompt("Insira sua altura (em m):"));	

	pessoa = new Pessoa(pessoaNome, pessoaPeso, pessoaAltura);
	loopOpcoes = true;

	while(loopOpcoes) {
		op = parseInt(prompt("Digite uma funcionalidade: \n1 - Descrição da pessoa. \n2 - Cálculo do IMC. \n3 - Trocar Usuário \n0 - Encerrar script."));
		switch(op) {
			case 1: {
				alert(pessoa.descricaoPessoa());
				break;
			}
			case 2: {
				alert(pessoa.imc());
				break;				
			}
			case 3: {
				loopOpcoes = false;
				break;				
			}
			case 0: {
				alert(`Tchau! ( ﾟдﾟ)つ Bye`);
				loopScript = false;
				loopOpcoes = false;
				break;
			}
		}
	}

}
