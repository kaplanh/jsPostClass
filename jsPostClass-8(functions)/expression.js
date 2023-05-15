// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//* ORNEK2:console dan girilen bir sayinin cift mi tek mi oldugunu gösteren programi fonk olarak yazin
//*********************************************/
// ?1.yol
// function tekYadaCift(sayi) {
//   return sayi % 2 == 0 ? "Cift" : "Tek";
// }
// console.log(tekYadaCift(5));
// console.log(tekYadaCift(10));

// const tekYadaCift = function (sayi) {
//   return sayi % 2 == 0 ? "Cift" : "Tek";
// };

// console.log(tekYadaCift(5));
// console.log(tekYadaCift(10));

// ?2.yol
// let oddEven = function (number) {
//   return number % 2 === 0 ? "EVEN" : "ODD"
// }

// console.log(oddEven(5))
// console.log(oddEven(2))

//* ORNEK3: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
// const enBüyük = function (n1, n2, n3) {
//   let ebüyük = n1;

//   if (n2 > ebüyük) {
//     ebüyük = n2;
//   }
//   if (n3 > ebüyük) {
//     ebüyük = n3;
//   }
//   return ebüyük;
// };

// console.log(enBüyük(1, 2, 3));

// * NOT:bu yazilim seklinde fonksiyon tanimlanmadan cagrilamiyor

//? Declarasyon (Function Expression)

// yazdir("Hallo FS14") //? invoke
//! ReferenceError: Cannot access 'yazdir' before initialization
//     at expression.js:19:1

// const yazdir = function (message) {
//   console.log(message)
// }

// yazdir("Hallo FS14") //? invoke
