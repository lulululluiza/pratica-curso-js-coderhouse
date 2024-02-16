class Alimento {
	constructor(nome, cor, peso, tipo) {
		this.nome = nome;
		this.cor = cor;
		this.peso = peso;
		this.tipo = tipo;
	}
	descricaoAlimento() {
		return `Objeto criado \nNome: ${this.nome} \nCor: ${this.cor} \nPeso: ${this.peso}g \nTipo: ${this.tipo}`
	}
}

let abacaxi = new Alimento('Abacaxi', 'Amarelo', 1500, 'Fruta')
let alface = new Alimento('Alface', 'Verde', 300, 'Verdura')

console.log(abacaxi.descricaoAlimento())
alert(abacaxi.descricaoAlimento())

console.log(alface.descricaoAlimento())
alert(alface.descricaoAlimento())