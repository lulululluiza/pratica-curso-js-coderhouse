function objeto(nome, cor, peso, tipo) {
	this.nome = nome;
	this.cor = cor;
	this.peso = peso;
	this.tipo = tipo;	
}

let abacaxi = new objeto('abacaxi', 'amarelo', '1500', 'fruta')

alert(`Objeto criado "${abacaxi.nome}" possui um nome com ${abacaxi.nome.length} caracteres.`)
console.log(`Objeto criado "${abacaxi.nome}" possui um nome com ${abacaxi.nome.length} caracteres.`)

alert(`Objeto criado possui a cor ${abacaxi.cor.toUpperCase()}.`)
console.log(`Objeto criado possui a cor ${abacaxi.cor.toUpperCase()}.`)

alert(`Objeto criado é do tipo ${abacaxi.tipo.toLowerCase()}.`)
console.log(`Objeto criado é do tipo ${abacaxi.tipo.toLowerCase()}.`)