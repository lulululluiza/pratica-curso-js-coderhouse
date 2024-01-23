let nome = prompt("Insira seu nome:")
if(nome === "") {
	alert(`Faltou inserir um nome mas bom dia/tarde/noite pessoa anônima!!`)
} else {
	alert(`Bom dia/tarde/noite ${nome}!!`)
}


alert("( ﾉ ﾟｰﾟ)ﾉ Prove que você não é um robo! ＼(ﾟｰﾟ＼)")
let result = parseInt(prompt("10+2?"))

if(result==12) {
	alert("Parabéns, você não é (aparentemente) um robô o(^▽^)o")
	let naoRobo = document.createElement('h1')
	naoRobo.innerText = "Parabéns! Você chegou ao fim desse script ( ´･･)ﾉ(._.`)"
	document.body.append(naoRobo)

} else {
	alert("Robô!!! ( ﾟдﾟ)つ Bye")
	let robo = document.createElement('a')
	robo.innerText = 'Caso vc seja não seja mesmo um robô e não cometeu um erro de digitação, clique aqui ;)'
	robo.href = 'https://pt.wikipedia.org/wiki/Adi%C3%A7%C3%A3o'	
	document.body.append(robo)
}



