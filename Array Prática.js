var valores = [8,1,7,2,9];

console.log(valores[4]);

for (var pos = 0 ; pos < valores.length; pos++) {
    console.log('Posição: ' + pos + ' valor: ' + valores[pos]);
}

let carros = [];
carros[0] = 'Volvo';
carros[1] = 'Jeep';
console.log(carros);

let motos = new Array('BMW','Yamaha','Honda');
motos = new Array(0);
console.log(motos)

// calcular media de todos os numeros de um array

let soma = 0
for (var pos = 0 ; pos < valores.length; pos++) {
    soma += valores[pos];
    // soma = soma + valores[pos]
}

let media = soma/valores.length;
console.log(media);