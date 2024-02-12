/*
Utilizando o "switch" crie uma função que:
- Recebe um número de 1 a 7
- Mostre em qual dia da semana estamos
*/

let loop = true
while(loop) {
	let n = parseInt(prompt("Insira um número de 1 a 7 ou 0 para encerrar o script:"))
	if(n == 0) {
		alert("Tchau ( ﾟдﾟ)つ Bye")
		loop = false
	} else if (n > 7 || n < 0) { 		
		alert("Insira um número de 1 a 7 ou 0 para encerrar o script!!!!!!!")
	} else {
		switch(n) {
			case 1: {
				alert("1 => Segunda-feira!")
				break
			}
			case 2: {
				alert("2 => Terça-feira!")
				break
			}
			case 3: {
				alert("3 => Quarta-feira!")
				break
			}
			case 4: {
				alert("4 => Quinta-feira!")
				break
			}
			case 5: {
				alert("5 => Sexta-feira!")
				break
			}
			case 6: {
				alert("6 => Sábado!")
				break
			}
			case 7: {
				alert("7 => Domingo ( _　_ )。゜zｚＺ!")
				break
			}
		}
	}
}