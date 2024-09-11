var diaSemana = parseInt(prompt("Insira um dia da semana de 1 a 7"));

switch(diaSemana){
    case 1:
        alert("Domingo");
        break;
    case 2:
         alert("Segunda-Feira");
         break;
    case 3:
         alert("Terça-Feira");
        break;
    case 4:
         alert("Quarta-Feira");
         break;
    case 5:
        alert("Quinta-Feira");
        break;
    case 6:
        alert("Sexta-Feira");
        break;
    case 7:
        alert("Sábado");
        break;
    default:
        alert("Seu numero não representa um dia da semana");
        break;
}