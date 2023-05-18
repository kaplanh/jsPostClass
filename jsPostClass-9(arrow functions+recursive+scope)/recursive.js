// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log("*** RECURSION ***");

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programi
//* recursive fonksiyonlar yardımıyla kodlayiniz.
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

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/

const topla = (n1, n2) => n1 + n2;
const cikar = (n1, n2) => n1 - n2;
const carp = (n1, n2) => n1 * n2;
const böl = (n1, n2) => n1 / n2;

const n1 = Number(prompt("n1:"));
const n2 = Number(prompt("n2:"));
const operator = prompt("('+', '-', '*', '/')  operator:");

const islem = (n1, operator, n2) => {
  let sonuc = 0;
  switch (operator) {
    case "+":
      // sonuc = n1 + n2;
      sonuc = topla(n1, n2);
      break;
    case "-":
      // sonuc = n1 - n2;
      sonuc = cikar(n1, n2);
      break;
    case "*":
      // sonuc = n1 * n2;
      sonuc = carp(n1, n2);
      break;
    case "/":
      // sonuc = n1 / n2;
      sonuc = böl(n1, n2);
      break;

    default:
      alert("Yanlis operatör girdiniz");
      sonuc = "";
      break;
  }
  return sonuc;
};

console.log(`${n1}${operator}${n2} = ${islem(n1, operator, n2)}`);

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
