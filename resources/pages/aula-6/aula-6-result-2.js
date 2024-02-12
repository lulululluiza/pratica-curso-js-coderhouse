let loop = true
while(loop) {
	let n = parseInt(prompt("Insira um número para calcular seu fatorial ou 0 para encerrar o script:"))
	if(n == 0) {
		alert("Tchau ( ﾟдﾟ)つ Bye")
		loop = false
	} else {
		let limite = 1
		let calculo = 1
		let fatorial = ""
		while (limite <= n) {
			calculo = calculo * limite
			limite++
			fatorial = fatorial.concat(calculo+" ")
		}
		alert(`Fatorial de ${n} é ${calculo} => ${fatorial}!`)
	}
}