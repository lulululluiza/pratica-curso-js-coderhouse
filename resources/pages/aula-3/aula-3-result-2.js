let loop = true
while(loop) {
	let input = parseInt(prompt("Insira um valor de 1 a 9 (ou 0 para finalizar o script):"))
	if (input <= -1 || input >= 10) {
		alert(":/ INSIRA UM VALOR DE 1 A 9!! :/")
	} else if(input >= 1 && input <= 3) {
		alert(`${input} está no range = 1 a 3`)
	} else if(input >= 4 && input <= 9) {
		alert(`${input} está no range = 4 a 9`)
	} else if(input==0){
		loop = false
		alert("Finalizando....... ( ﾟдﾟ)つ Bye")
	}
}