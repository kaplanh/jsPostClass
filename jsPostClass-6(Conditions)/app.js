// !DOM elemanlarina (HTML) elamanlarini secme metodlari
//? document.getElementById("if-else").innerHTML = 'merhaba';
//*id si 'if-else' olan tag e ulasir ve tag in icinde ne varsa siler(üzerine) 'merhaba' yazdirir
//? document.getElementById("if-else").innerHTML += 'merhaba';
//*id si 'if-else' olan tag e ulasir ve (+=) den dolayi tag in icindekilere concanet olaraka yanina  'merhaba' yazdirir
// ?document.getElementsByClassName("trnr")[0].innerHTML += 'Dünya';
//*bu metod ile class'i 'trnr' olan tum elemanlar secilmektedir dolayisiyla tek bir elemena ulasmak icin indisleme ([0],[1]...) kullanmak gerekir

//? document.getElementsByTagName('p')[0].innerHTML = 'ali'
//*bu metod ile ismi p olan tum elemanlar secilmektedir dolayisiyla tek bir elemena ulasmak icin indisleme ([0],[1]...) kullanmak gerekir

//? document.querySelector('#if-else').innerHTML=
// *id si 'if-else' olan ilk HTML elemanini secer
// ?document.querySelector('.trnr').innerHTML =
// *class'i si 'trnr' olan ilk HTML elemanini secer

//? document.querySelectorAll('#trnr')[0].innerHTML =
// *id si 'if-else' olan tüm  HTML elemanini secer dolayisiyla tek bir elemena ulasmak icin indisleme ([0],[1]...) kullanmak gerekir
//? document.querySelectorAll('.trnr')[0].innerHTML =
// *class 'i 'trnr' olan tüm  HTML elemanini secer dolayisiyla tek bir elemena ulasmak icin indisleme ([0],[1]...) kullanmak gerekir

// !if-else if -else
// ?soru - 1
// *1.yol
// const number = Number(prompt("Enter a number: "));

// if (number < 0) {
//   document.getElementById("if-else").innerHTML += "negative";
// } else if (number == 0) {
//   document.getElementById("if-else").innerHTML += "sıfır";
// } else {
//   document.getElementById("if-else").innerHTML += "pozitive";
// }

// *2.yol

// const sayi = +prompt("Sayi: ");
// let sonuc = "";

// if (sayi > 0) {
//   sonuc = "Positif";
// } else if (sayi < 0) {
//   sonuc = "Negatif";
// } else {
//   sonuc = `sayiniz ${sayi} dir`;
// }
// document.querySelector("#if-else").innerHTML = sonuc;

// ?soru-2
// const sayi1 = +prompt("sayi1 :");
// const sayi2 = +prompt("sayi2 :");
// const sayi3 = +prompt("sayi3 :");

// let enBüyük = sayi1;

// if (sayi2 > enBüyük) {
//   enBüyük = sayi2;
// }
// if (sayi3 > enBüyük) {
//   enBüyük = sayi3;
// }

// document.querySelector("#if-else").innerHTML = `en büyük sayi ${enBüyük}`;

// ?soru-3
// const sayi1 = +prompt("sayi1: ");
// const sayi2 = +prompt("sayi2: ");

// const islem = prompt("Yapmak istediginiz islemi seciniz ('+', '-' ,'*', '/': ");

// let sonuc = 0;
// if (islem === "+") {
//   sonuc = sayi1 + sayi2;
// } else if (islem === "-") {
//   sonuc = sayi1 - sayi2;
// } else if (islem === "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem === "/") {
//   sonuc = sayi1 / sayi2;
// } else {
//   sonuc = "Hatali giris yaptiniz.";
// }
// console.log(`1.sayi:${sayi1}
// 2.sayi:${sayi2}
// sonuc: ${sonuc}`);

// document.querySelector("#if-else").innerHTML = `1.sayi:${sayi1} <br />
// 2.sayi:${sayi2}
// sonuc: ${sonuc}`;

//! nested if
// const n1 = 50;
// const n2 = 20;
// const n3 = 30;

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("Biggest:", n1);
//   }
// }
// console.log("ali");

// !TERNARY

// ?soru-1
// const not = +prompt("Not: ");

// let mesaj = not >= 50 ? "Gectiniz" : "Kaldiniz";
// // console.log(mesaj);

// document.querySelector(".trnr").innerHTML = mesaj;

// ?soru-2
// const maas = +prompt("Maas: ");
// const asgariÜcret = 8500;

// let zamliMaas = maas < 8500 ? maas * 1.5 : maas * 1.1;

// document.querySelectorAll(".trnr")[1].innerHTML = zamliMaas;

//! Nested ternary

// const speed = 110;
// speed > 120
//   ? console.log("Speedy")
//   : speed >= 90
//   ? console.log("Normal")
//   : console.log("Low Speed");

// !switch-case
// ?soru-1
// let gün = +prompt("1-7 arasinda bir deger gir");
// switch (gün) {
//   case 1:
//     gün = "pazartesi";
//     break;
//   case 2:
//     gün = "sali";
//     break;
//   case 3:
//     gün = "carsamba";
//     break;
//   case 4:
//     gün = "persembe";
//     break;
//   case 5:
//     gün = "cuma";
//     break;
//   case 6:
//     gün = "cumartesi";
//     break;
//   case 7:
//     gün = "pazar";
//     break;
//   default:
//     gün = "hatali giris";
//     break;
// }
// document.querySelector("#switch").innerHTML = gün;
// console.log(gün);
// console.log("switch-case karar mekanizmasi bitti");

// !if-else,ternary.circuit karsilastirmali bir örnek
// const age = 18;

// let description = "";
//? 1-if-else ile
// if (age >= 18) {
//   description = "Adult";
// }

//? 2-Ternary ile
// description = age >= 18 ? "Adult" : "";

//? 3- Short-Circuit ile  (Tek bir durum var ise short-circuit yontemi daha kisa oluyor)
//* age 18'e eşit veya daha büyükse (true) description'a Adult aktar aksi takdirde hiç bir şey yapma
// age >= 18 && (description = "Adult");

//* age 18'e eşit veya daha büyük değilse (false) description'a Adult aktar aksi takdirde hiç bir şey yapma
// age < 18 || (description = "Adult");
// console.log(description);
