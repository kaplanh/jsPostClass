// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");
// for (let i = 1; i < 4; i++) {
//   console.log("Merhaba");
// }

// ?10 kere konsola Merhaba yazdıran uygulamayı for döngüsü ile
for (let i = 1; i <= 10; i++) {
  //   console.log(i, "Merhaba");
  //   console.log(`${i}.Merhaba`);
  //   console.log("hüseyin");
  //   document.querySelector("#for").innerHTML += "<br/>" + "Merhaba";
}

// ?10 kere konsola isminizi yazdıran uygulamayı for döngüsü ile yazınız

// for (let i = 1; i <= 10; i++) {
//   console.log("Hüseyin");
//   document.querySelector("#for").innerHTML = "Merhaba";
// }

//? 100 adet cikti veren kodu yaziniz.
// let x = 1;
// console.log(x);
// let y = x++;
// console.log(y);
// console.log(x);

// for (let i = 1; i <= 5; i++) {
//   document.querySelector("#for").innerHTML += "<br/>" + i + "." + "=" + i;
//   console.log(i ** 2);
// }
// document.querySelector("#for").innerHTML += "<br/>" + i;

// for (let i = 0; i <= 5; ++i) {
//   document.querySelector("#for").innerHTML += "<br/>" + i;
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}-FS14`);
// }

for (let i = 1; i <= 100; i *= 2) {
  console.log(`${i}-FS14`);
}
// 1 - FS14
// 2 - FS14
// 4 - FS14
// 8 - FS14
// 16 - FS14
// 32 - FS14
// 64 - FS14

// //? 1 den n kadar sayilari toplayan kodu yaziniz.

// const n = prompt("Enter your number")
// let sum = 0 //* Global degisken

// for (let i = 1; i <= n; i++) {
//   //! i lokal degiskendir
//   //   sum = sum + i
//   sum += i //* kisa hali
//   console.log(sum)
// }
// // console.log(i)  //! Error
// console.log(`SUM: ${sum}`)
// *örnekler
//?1- 1 den 10 kadar olan sayıların toplamını yazdıran program:

// document.querySelector("#for").innerHTML =

//?2- 1 den n kadar olan sayıların toplamını yazdıran program.
// NOT: n prompt ile dışarıdan girilebilir

//? 3- 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
//? Math.random() => 0 - 1 arasinda rasgele bir sayi üretir.

// const adet = prompt("kac adet sayi uretmek istersiniz:?");

// for (let sayac = 1; sayac <= adet; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
// }
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.
