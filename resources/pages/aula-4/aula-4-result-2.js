let valor1 = parseInt(prompt("Insira um valor:"))
let valor2 = parseInt(prompt("Insira outro valor:"))
subtracao(valor1, valor2)


function subtracao(valor1, valor2) {
    if(valor1 > valor2) {
        alert(`${valor1} é maior que ${valor2}. A subtração do primeiro pelo segundo é igual a ${valor1 - valor2}`)
    } else {
        alert(`${valor2} é maior que ${valor1}. A subtração do primeiro pelo segundo é igual a ${valor2 - valor1}`)
    }
}