function par() {
    let input = parseInt(prompt("Insira um valor e descubra se ele é par ou ímpar:"))

    if(input%2 == 0) {
        alert("Par!!")
    } else {
        alert("Impar! Ou um valor sem tratamento no script, tipo caracteres :/")
    }
}

for(let x=0; x<3; x++) {
    par()
}
