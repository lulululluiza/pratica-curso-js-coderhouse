/*
Solicitar um texto através de prompt e, se for igual a “Olá“, mostrar uma mensagem no console.
Solicitar um número através do prompt e verificar se está entre 10 e 50. Em caso positivo, 
mostrar um alert.
*/

let loop1 = true
while(loop1) {
	let input = parseInt(prompt("Insira um valor maior que 1000 (ou 0 para pular este loop):"))
	if (input <= 999 && input != 0) {
		alert(":/ INSIRA UM VALOR MAIOR QUE 1000!! :/")
	} else if(input >= 1000 && input != 0) {
		alert(`${input} é maior que 1000!!`)
	} else if(input==0){
		loop1 = false
		alert("Finalizando....... este loop, próximo! ( ﾟдﾟ)つ Bye")
	}
}

let loop2 = true
while(loop2) {
	let input = prompt("Insira um Olá (ou 0 para pular este loop):")
	if (input.toUpperCase() == "OLÁ") {
		alert("Olá!!")
	} else if(input.toUpperCase() == "OLA") {
		alert("Ola!!")
	} else if(input=="0"){
		loop2 = false
		alert("Finalizando....... este loop, próximo! ( ﾟдﾟ)つ Bye")
	}
}

let loop3 = true
while(loop3) {
	let input = parseInt(prompt("Insira um valor entre 10 e 50 (ou 0 para encerrar o script):"))
	if (input != 0 && (input <= 9 || input >= 51)) {
		alert(":/ INSIRA UM VALOR DE 10 A 50!! :/")
	} else if(input >= 10 && input <= 50) {
		alert(`${input} está no range 10 a 50!!`)
	} else if(input==0){
		loop3 = false
		alert("Finalizando....... o script! ( ﾟдﾟ)つ Bye")
	}
}