//adivinhador de numero aleatorio

function numAleatorio(){
    return Math.floor(Math.random() * 10) + 1;
}
alert ("Adivinhe o numero!")
const numCerto = numAleatorio();

let tentativa;

do {
    tentativa = parseFloat(prompt("Adivinhe um numero entre 1 e 10!"));

  if (tentativa === numCerto){
    alert("Parabens! você acertou!");
  } else {
    alert("Tente novamente!");
  }

} while (tentativa !== numCerto);