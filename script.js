var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    var elementoResultado2 = document.getElementById("parabens");
    elementoResultado2.innerHTML = "Parabéns!";
    document.querySelector("body").style.background =
      "url('https://c.tenor.com/rDKZFPwK-00AAAAC/the-matrix-keanu-reeves.gif')";
    document.querySelector("body").style.backgroundSize = "cover";
    elementoResultado.innerHTML =
      "Você desbloqueou a saída. Escape bem sucedido!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "Os agentes estão vindo! Tente novamente com um número adequado.";
  } else {
    elementoResultado.innerHTML = `A saída continua bloqueada. O número correto é ${
      chute > numeroSecreto ? "menor" : "maior"
    }.`;
  }
}