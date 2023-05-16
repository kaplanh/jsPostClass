/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****");

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

//? Arrow

// const kareAl = (num) => num * num
// const topla = (s1, s2) => s1 + s2
// const ciktiVer = () => console.log("Merhaba")

// console.log("KARE:", kareAl(4))
// console.log("TOPLA:", topla(4, 5))
// ciktiVer()

//* ORNEK: 3 sayinin en buyugunu bulan fonks.
//***********************************************/
//! Süslü parantez kullanıldığnda otomatik returning ozelligi kaybolur
// const findBiggest = (n1, n2, n3) => {
//   let biggest = n1

//   if (n2 >= biggest) {
//     biggest = n2
//   }
//   if (n3 >= biggest) {
//     biggest = n3
//   }
//   return biggest
// }

// console.log("BIGGEST:", findBiggest(1, 3, 2))

//? Alternatif olarak
// const findBiggestShort = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log("BIGGEST:", findBiggestShort(1, 3, 2));

//* ORNEK: Doğum tarihini parametre olarak alan ve ana
//* programa yaşı hesaplayıp döndüren fonksiyonu yazınız.
//******************************************************/

// const calculateAge = (year) => new Date().getFullYear() - year;

// console.log(`AGE:${calculateAge(1990)}`);

//* ORNEK: Silindir Hacmi
//******************************************/
//? hacim = Pi x r x r x h

// const h = Number(prompt("h:"));
// const r = Number(prompt("r:"));
// // const pi = 3.14

// const volume = (r, h) => Math.PI * r * r * h;
// console.log("VOLUME:", volume(r, h).toFixed(2));
// console.log("VOLUME:", volume(r, h).toPrecision(5));

//? toPrecision(5) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 5 degeri tam ve kesir icin toplam 5 basamak kullan demektir.
// console.log("VOLUME:", volume(r, h).toExponential(5));
//? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak

//* ORNEK: Dairenin Alani
//******************************************/
//* yaricap kullanicidan alinan dairenin alanini hesaplayan fonk nu arraw yöntemi ile yaz
// alan = pi*r**2
// const r = Number(prompt("r:"));
// const alan = (r) => Math.PI * r ** 2;

// console.log("Alan: ", alan(r));
// console.log("Alan: ", alan(r).toFixed(2));
// console.log("Alan: ", alan(r).toPrecision(5));
// console.log("Alan: ", Math.round(alan(r)));

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mul = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

const compute = (n1, n2, operator) => {
  let result = 0;
  switch (operator) {
    case "+":
      // result = n1 + n2
      result = add(n1, n2);
      break;
    case "-":
      // result = n1 - n2
      result = sub(n1, n2);
      break;
    case "x":
    case "*":
      // result = n1 * n2
      result = mul(n1, n2);
      break;
    case "/":
      // result = n1 - n2
      result = div(n1, n2);
      break;
    default:
      alert("Incorrect Operator");
      result = "";
    //   result = "Error";
  }
  return result;
};
const n1 = +prompt("First Number:");
const operator = prompt("Operator:");
const n2 = +prompt("Second Number:");

console.log(`${n1}${operator}${n2} = ${compute(n1, n2, operator)}`);

//* ORNEK: Girilen sayinin faktoriyelini hesaplayan programı fonksiyonlar yardımıyla kodlayiniz.

//? Faktoriel terimleri:  n! = n * (n-1)!
//? Fakto(5) => 5.4.3.2

//! ITERASYON YONTEMI ILE
const fakto = (n) => {
  let f = 1;
  for (let i = n; i > 1; i--) {
    f = f * i;
  }
  return f;

  //   for (let i = 2; i <= n; i++) {}
};

const number = +prompt("n:");

number < 0
  ? alert("Number should be bigger than zero")
  : console.log(`Fakto(${number})= ${fakto(number)}`);
