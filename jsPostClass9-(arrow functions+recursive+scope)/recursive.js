// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log("*** RECURSION ***");

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/

// const add = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const mul = (n1, n2) => n1 * n2;
// const div = (n1, n2) => n1 / n2;

// const compute = (n1, n2, operator) => {
//   let result = 0;

//   switch (operator) {
//     case "+":
//       // result = n1 + n2
//       result = add(n1, n2);
//       break;
//     case "-":
//       // result = n1 - n2
//       result = sub(n1, n2);
//       break;
//     case "x":
//     case "*":
//       // result = n1 * n2
//       result = mul(n1, n2);
//       break;
//     case "/":
//       // result = n1 - n2
//       result = div(n1, n2);
//       break;
//     default:
//       alert("Incorrect Operator");
//       result = "";
//     //   result = "Error";
//   }
//   return result;
// };
// const n1 = +prompt("First Number:");
// const operator = prompt("Operator:");
// const n2 = +prompt("Second Number:");

// console.log(`${n1}${operator}${n2} = ${compute(n1, n2, operator)}`);

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programı fonksiyonlar yardımıyla kodlayiniz.

//? Faktoriel terimleri:  n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

//! ITERASYON YONTEMI ILE
// const fakto = (n) => {
//   let f = 1;
//   for (let i = n; i > 1; i--) {
//     f = f * i;
//   }
//   return f;

//   //   for (let i = 2; i <= n; i++) {}
// };

// const number = +prompt("n:");

// number < 0
//   ? alert("Number should be bigger than zero")
//   : console.log(`Fakto(${number})= ${fakto(number)}`);

//! recursive fonksiyonlar yardımıyla kodlayiniz.
//? Faktoriel terimleri:  n! = n * (n-1)!

//? Fakto(5) => 5.4.3.2

// const fakto = (n) => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fakto(n - 1);
//   }
// };

// const number = +prompt("n:");

// number < 0
//   ? alert("Number should be bigger than zero")
//   : console.log(`Fakto(${number})= ${fakto(number)}`);

//! ÖDEV
// fibonacci serisini hesaplayan bir kod yaz
//! ITERASYON YONTEMI ILE
function itereFibonacci(num) {
    var before = 0;
    var actual = 1;
    var next = 1;

    for (let i = 0; i < num; i++) {
        console.log(next);
        before = actual + next;
        actual = next;
        next = before;
    }
}

itereFibonacci(100);
//! recursive fonksiyonlar yardımıyla kodlayiniz.

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
    console.log("Enter a positive integer.");
} else {
    for (let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
