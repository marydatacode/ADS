var n = 3;
n *=  10;

console.log(n);

var x = 10;
x--;

a = 20;
b = 60;

console.log(x);

console.log(!(n <= x ||  b != a));

// verificar se a é maior que b e b é divisivel por 2
console.log( a > b && b % 2 == 0);

// b é maior igual a ou b dividido por 2 o result é 2:
console.log(a >= b || b / 2 == 2);

// a é maior que b e b é maior igual a 5
console.log( a >  b && b >= 5);

// b é par ou impar usando ternário 
resultado = b % 2 == 0 ? "par" : 'impar';