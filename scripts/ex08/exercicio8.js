let quantidadeNum = parseInt(prompt('Quantos números você pretende informar?'));
let numeros = [];

if (isNaN(quantidadeNum) || quantidadeNum <= 0) {
    alert('Quantidade inválida. Por favor, insira um número positivo.');
} else {
    for (let i = 0; i < quantidadeNum; i++) {
        let num = parseFloat(prompt(`Informe o ${i + 1}º número`));
        
        if (!isNaN(num)) {
            numeros[i] = num;
        } else {
            alert('Entrada inválida. Por favor, insira um número.');
            i--; 
        }
    }

    function calcular(array) {
        let soma = array.reduce((acc, num) => acc + num, 0);
        return soma / array.length;
    }

    let media = calcular(numeros);
    alert(`A média dos números informados é: ${media.toFixed(2)}`);
}
