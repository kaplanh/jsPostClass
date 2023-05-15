// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//* ORNEK1:
//***********************************************/
// yazdirMerhaba() //? hoisting oluyor (var değişkenleri)

// function yazdirMerhaba() {
//   console.log("Merhaba FS14")
// }
// yazdirMerhaba()

//* ----------------------------
//? Declarasyon (Function Expression)

// yazdir("Hallo FS14") //? invoke
//! ReferenceError: Cannot access 'yazdir' before initialization
//     at expression.js:19:1

// const yazdir = function (message) {
//   console.log(message)
// }

// yazdir("Hallo FS14") //? invoke

//* ORNEK2:
//*********************************************/
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

//? Arrow

// const kareAl1 = () => "merhaba";
// const kareAl = (num) => num * num;
// const topla = (s1, s2) => s1 + s2;
// const ciktiVer = () => console.log("Merhaba");

// console.log("KARE:", kareAl(4));
// console.log("TOPLA:", topla(4, 5));
// ciktiVer();

//* ORNEK4: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

const enBüyükSayi = (n1, n2, n3) =>{
  let ebs = n1
  if (n2>ebs) {
    ebs = n2
  }
  if (n3>ebs) {
    ebs = n3
  }
  return ebs
}

console.log(enBüyükSayi(2,45,3));

//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
// const findBiggest = (n1, n2, n3) => {
//   let biggest = n1;

//   if (n2 >= biggest) {
//     biggest = n2;
//   }
//   if (n3 >= biggest) {
//     biggest = n3;
//   }
//   return biggest;
// };

// console.log("BIGGEST:", findBiggest(1, 3, 2));

//? Alternatif olarak
// const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log("BIGGEST:", findBiggestShort(1, 3, 2));



for (let i = 0;i<=6; i++) {
  for (let j = 0;  1 <=i ; j++) {
    
    
  }
  +console.log('\n'); -
}
