let calculadora = (primeiroNumero, segundoNumero, operacao) => {
    if (operacao == "+") {
        return primeiroNumero + segundoNumero;
    }
    else if (operacao == "-") {
        return primeiroNumero - segundoNumero;
    }
    else if (operacao == "*") {
        return primeiroNumero * segundoNumero;
    }
    else if (operacao == "/") {
        return primeiroNumero / segundoNumero;
    }
    else {
        return 0;
    }
}

let n1 = parseInt(prompt("Insira um valor: "))
let n2 = parseInt(prompt("Insira outro valor: "))
let op = prompt("Insira uma operação (+, -, * ou /)")

alert(`Resultado = ${calculadora(n1, n2, op)}`);


