function objeto(nome, cor, peso, tipo) {
	this.nome = nome;
	this.cor = cor;
	this.peso = peso;
	this.tipo = tipo;	
}

let abacaxi = new objeto('abacaxi', 'amarelo', '1500', 'fruta')

alert(`Objeto criado via construtor:\n ${JSON.stringify(abacaxi)}`)
console.log(`Objeto criado via construtor:\n ${JSON.stringify(abacaxi)}`)
