let loop = true
while(loop) {
	let input = parseInt(prompt("Insira um valor de 1 a 5 (ou 0 para finalizar o script):"))
	if (input < 0 || input > 5) {
		alert(":/ INSIRA UM VALOR DE 0 A 5!! :/")
	} else if(input==1) {
		alert("(o゜▽゜)o☆ Um!")
	} else if(input==2) {
		alert("(o゜▽゜)o☆ Dois!")
	} else if(input==3) {
		alert("(o゜▽゜)o☆ Três!")
	} else if(input==4) {
		alert("(o゜▽゜)o☆ Quatro!")
	} else if(input==5) {
		alert("(o゜▽゜)o☆ Cinco!")
	} else if(input==0){
		loop = false
		alert("Finalizando....... ( ﾟдﾟ)つ Bye")
	}
}