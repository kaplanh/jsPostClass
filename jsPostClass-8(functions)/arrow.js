//? Arrow

const kareAl1 = () => "merhaba";
const kareAl = (num) => num * num;
const topla = (s1, s2) => s1 + s2;
const ciktiVer = () => console.log("Merhaba");

console.log("KARE:", kareAl(4));
console.log("TOPLA:", topla(4, 5));
ciktiVer();

//* ORNEK4: 3 sayinin en buyugunu bulan fonks.
//***********************************************/

const enBüyükSayi = (n1, n2, n3) => {
  let ebs = n1;
  if (n2 > ebs) {
    ebs = n2;
  }
  if (n3 > ebs) {
    ebs = n3;
  }
  return ebs;
};

console.log(enBüyükSayi(2, 45, 3));

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

// for (let i = 0;i<=6; i++) {
//   for (let j = 0;  1 <=i ; j++) {

//   }
//   +console.log('\n'); -
// }
