function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").textContent = "Por favor, insira números válidos.";
        return;
    }

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                resultado = "Erro: divisão por zero.";
            } else {
                resultado = numero1 / numero2;
            }
            break;
        case "%":
            resultado = numero1 % numero2;
            break;
        case "**":
            resultado = numero1 ** numero2;
            break;
        default:
            resultado = "Operação inválida!";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
