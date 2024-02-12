let loop = true
while(loop) {
	let n = parseInt(prompt("Insira um número de 1 a 10 ou 0 para encerrar o script:"))
	console.log(typeof n)
	if(n == 0) {
		alert("Tchau ( ﾟдﾟ)つ Bye")
		loop = false
	} else if (n > 10 || n < 0) { 		
		alert("Insira um número de 1 a 10 ou 0 para encerrar o script!!!!!!!")
	} else {
		let saida = ""
		for(n; n >= 1 ; n--) {
			saida = saida.concat(n+" ") 
		}
		alert(saida)
	}
}