 let palavras = ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Kiwi", "Cereja", "Pêssego", "Melão", "Ameixa", "Framboesa", "Maracujá", "Goiaba", "Jabuticaba", "Coco", "Nectarina", "Caqui", "Tâmara", "Damascos", "Graviola", "Mirtilo", "Cabeludinha", "Lucuma", "Rambutan", "Longan", "Physalis", "Mangaba",  "Pitanga", "Figo", "Jaca", "Açaí", "Tangerina", "Romã", "Carambola", "Cupuaçu", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Kiwi", "Cabeludinha", "Figo", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra", "Melancia", "Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Manga", "Uva", "Pêra"];

 function isValidWord(word) {
   return isNaN(word) && word.trim() !== "";
 }

 let palavraEspecifica = prompt("Digite o nome da fruta que você deseja contar, digite a primeira letra em maiúsculo por favor:");
 
 if (isValidWord(palavraEspecifica)) {
   let contagem = 0;
   
   for (let i = 0; i < palavras.length; i++) {
     if (palavras[i] === palavraEspecifica) {
       contagem++;
     }
   }

   alert("A fruta '" + palavraEspecifica + "' aparece " + contagem + " vezes no vetor.");
 } else {
   alert("Entrada inválida. Por favor, digite uma palavra válida com a primeira letra em maiúsculo.");
 }