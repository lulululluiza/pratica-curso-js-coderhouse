/*
1) Inserir preço de custo 
2) Somar ICMS 
3) Mostrar preço calculado.

Determinar se dois número são múltiplos: 
1) Inserir números a serem verificados 
2) Verificar se um é múltiplo do outro 
3) Mostrar resultado.

*/

let loop =  true
let op = parseInt(prompt("Insira uma funcionalidade:\n 1 - Converter temperatura\n 2 - Calcular IMC\n 3 - Frete hipotético\n 0 - Encerrar script"))

while (loop) {
    if(op == 0) {
        alert("Tchau! ( ﾟдﾟ)つ Bye")
        loop = false
    } else if(op == 1) {
        let valor = parseInt(prompt("Insira uma temperatura: "))
        let temp1 = parseInt(prompt("Insira o tipo dessa temperatura: \n 1 - Fahrenheit\n 2 - Celsius\n 3 - Kelvin"))
        let temp2 = parseInt(prompt("Insira o tipo para converter essa temperatura:\n 1 - Fahrenheit\n 2 - Celsius\n 3 - Kelvin"))
        alert(`${temperatura(valor, temp1, temp2)}`)

        let continuar = parseInt(prompt("Continuar?\n 1- Sim\n 2 - Não"))
        if(continuar == 2) {
            op = 0
        }
    } else if (op == 2) {
        let altura = parseFloat(prompt("Insira a altura em m: "))
        let peso = parseInt(prompt("Insira o peso em kg: "))
        alert(`${imc(altura, peso)}`)

        let continuar = parseInt(prompt("Continuar?\n 1- Sim\n 2 - Não"))
        if(continuar == 2) {
            op = 0
        }
    } else if (op == 3) {
        let valor = parseInt(prompt("Insira o valor do produto:"))
        let origem = parseInt(prompt("Insira a região de origem\n1 - Norte\n 2 - Nordeste\n 3 - Centro-Oeste\n 4 - Sudeste\n 5 - Sul"))
        let destino = parseInt(prompt("Insira a região de destino\n1 1 - Norte\n 2 - Nordeste\n 3 - Centro-Oeste\n 4 - Sudeste\n 5 - Sul"))

        alert(`Valor total com frete = ${frete(valor, origem, destino)}`)

        let continuar = parseInt(prompt("Continuar?\n 1- Sim\n 2 - Não"))
        if(continuar == 2) {
            op = 0
        }
    } else {
        alert("Insira uma opção válida! w(ﾟДﾟ)w")
    }
}

function temperatura (valor, temp1, temp2) {
    /*
        1 - Fahrenheit
        2 - Celsius
        3 - Kelvin
    */

    let result = 0

    if(temp1 == 1) {
        if(temp2 == 2) {
            return ((valor - 32) / 1.8)
        } else if (temp2 == 3) {
            return (((valor-32) * 5) / (9 + 273))
        }
    } else if(temp1 == 2) {
        if(temp2 == 1) {
            return ((valor * 1.8) + 32)
        } else if (temp2 == 3) {
            return (valor + 273)
        }
    } else if (temp1 == 3) {
        if(temp2 == 1) {
            return ((valor - 273) * 1.8 + 32)
        } else if (temp2 == 2) {
            return (valor - 273)
        }
    }
}

function imc (altura, peso) {
    let calculo = (peso) / (altura * altura)
    retorno = ""

    if (calculo <= 18.5) {
        retorno = `${calculo} = IMC abaixo do normal.`
    } else if (calculo > 18.5 && calculo <= 24.9) {
        retorno = `${calculo} = IMC normal.`
    } else if (calculo > 24.9 && calculo <= 29.9) {
        retorno = `${calculo} = IMC em sobrepeso.`
    } else if (calculo > 29.9 && calculo <= 34.9) {
        retorno = `${calculo} = IMC em Obesidade grau I.`
    } else if (calculo > 34.9 && calculo <= 39.9) {
        retorno = `${calculo} = IMC em Obesidade grau II.`
    } else if (calculo > 40) {
        retorno = `${calculo} = IMC em Obesidade grau III.`
    }

    return retorno
}

function frete (valor, origem, destino) {
    if(origem == 1 || origem == 2 || origem == 3) {
        if (destino == 1 || destino == 2 || destino == 3) {
            return valor + 15
        }
        else {
            return valor + 30
        }
    }
    else if(origem == 4 || origem == 5) {
        if (destino == 1 || destino == 2 || destino == 3) {
            return valor + 50
        }
        else {
            return valor + 10
        }
    }    
}