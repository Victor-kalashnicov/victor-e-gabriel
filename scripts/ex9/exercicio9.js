let numeros = [2, 3, 5, 7, 8, 12, 17, 18, 19, 22, 27, 31, 34, 35, 42, 43, 51, 56, 58, 64, 66, 78, 84, 89, 93, 112, 256, 389, 472, 583, 698, 741.];
    let valorEspecifico;

    do {
        valorEspecifico = prompt("Insira um valor específico:");
        
        if (isNaN(valorEspecifico) || valorEspecifico === "") {
            alert("Por favor, insira um número válido.");
        } else {
            valorEspecifico = parseInt(valorEspecifico, 10);
        }
    } while (isNaN(valorEspecifico) || valorEspecifico === "");

    let maioresQueValor = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > valorEspecifico) {
          
            maioresQueValor.push(numeros[i]);
        }
    }

   
    if (maioresQueValor.length > 0) {
      
        alert("Os números maiores que " + valorEspecifico + " são: " + maioresQueValor.join(", ") + ".");
    } else {
       
        alert("Não há números maiores que " + valorEspecifico + " no vetor.");
    }