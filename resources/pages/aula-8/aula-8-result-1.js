let objeto = {
	nome: 'abacaxi',
	cor: 'amarelo',
	peso: 1500,
	tipo: "fruta"
}

alert("Alterando valores do objeto...")
alert(`Antes: \nNome= ${JSON.stringify(objeto.nome)} \nPeso= ${JSON.stringify(objeto['peso'])}`)
console.log(`Antes: \nNome= ${JSON.stringify(objeto.nome)} \nPeso= ${JSON.stringify(objeto['peso'])}`)
objeto.nome = 'morango'
objeto['peso'] = 50

alert(`Depois: \nNome= ${JSON.stringify(objeto.nome)} \nPeso= ${JSON.stringify(objeto['peso'])}`)
console.log(`Depois: \nNome= ${JSON.stringify(objeto.nome)} \nPeso= ${JSON.stringify(objeto['peso'])}`)
