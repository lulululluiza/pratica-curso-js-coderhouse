function objeto(nome, cor, peso, tipo) {
	this.nome = nome;
	this.cor = cor;
	this.peso = peso;
	this.tipo = tipo;	
}

let abacaxi = new objeto('abacaxi', 'amarelo', '1500', 'fruta')

let h1 = document.createElement('h1')

for(itens in abacaxi) {
	console.log(`${itens} = ${abacaxi[itens]}`)
	let h1 = document.createElement('h3')
	h1.innerText = `${itens}: ${abacaxi[itens]}`
	document.getElementsByTagName("body")[0].appendChild(h1)
}

