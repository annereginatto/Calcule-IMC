document.querySelector("#nome").focus();

function reiniciar() {
    document.querySelector("#nome").value = "";
    document.querySelector("#nome").focus();
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
    document.querySelector("#resultado").innerHTML = "";
}

function calculaIMC(peso, altura) {
    var nome = document.querySelector("#nome").value;
    var peso = parseFloat(document.querySelector("#peso").value);
    var altura = parseFloat(document.querySelector("#altura").value);
    var imc = peso / (altura * altura);
    var imcCalculado = document.querySelector("#resultado");

    if (imc <= 18.5) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Você está abaixo do peso ideal...<br> Procure um profissional de saúde para orientação.";
    } else if (imc > 18.5 && imc < 25) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Parabéns! Você está no peso ideal!";
    } else if (imc >= 25 && imc < 30) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Você possui sobrepeso...<br> Procure um profissional de saúde para orientação.";
    } else if (imc >= 30 && imc < 35) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Você possui obesidade grau I...<br> Procure um profissional de saúde para orientação.";
    } else if (imc >= 35 && imc < 40) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Você possui obesidade grau II...<br> Procure um profissional de saúde para orientação.";
    } else if (imc >= 40) {
        imcCalculado.innerHTML = nome + ", o seu IMC é " + (imc).toFixed(2) + "." + " <br>Você possui obesidade grau III...<br> Procure um profissional de saúde para orientação.";
    } else {
        imcCalculado.innerHTML = "Por favor, preencha todos os campos!";
    }
}