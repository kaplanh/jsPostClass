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

// ?soru-2(Binary sourch algorithm)
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

// !(Nested ternary anlasilabilirligi azaltiyor o nedenle pek tercih edilmez bu durumda if-else yapisi aha mantiklidir)
// const speed=+prompt('Hiziniz: ')
// if (speed>120) {
//     console.log('speedy');
// } else if(speed>=90) {
//     console.log('Normal');
// } else {
//     console.log('Normal');
// }

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

// ?soru-2

// let ay = prompt("Lütfen ay giriniz").trim();

// //let day = dayUserInput.toLowerCase();

// switch (ay.toLowerCase()) {
//     case "ocak":
//     case "mart":
//     case "temmuz":
//     case "ağustos":
//     case "ekim":
//     case "aralık":
//         console.log(`${ay} ayı 31 gün çeker`);
//         break;
//     case "nisan":
//     case "haziran":
//     case "eylül":
//     case "kasım":
//         console.log(`${ay} ayı 30 gün çeker`);
//         break;
//     default:
//         console.log("Şubat ayı 28/29 gündür");
// }

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

//TODO Homeworks
// ?1
/*const grade = +prompt("Please enter your grade: ");
if (grade < 0) {
    console.log("The grade can't be smaller than 0");
} else if (grade <= 25) {
    console.log("FF");
} else if (grade <= 45) {
    console.log("DD");
} else if (grade <= 65) {
    console.log("CC");
} else if (grade <= 75) {
    console.log("BB");
} else if (grade <= 90) {
    console.log("BA");
} else if (grade <= 100) {
    console.log("AA");
} else {
    console.log('The grade can not be bigger than 100');
}
    */

// const grade = prompt("Please enter your grade")
// // const grade = 99
// let result = ""
//
// if (grade >= 0 && grade<=25) {
//     result = "FF"
// }else if(grade>=26 && grade<=45){
//     result = "DD"
// }else if (grade>=46 && grade<=65){
//     result = "CC"
// }else if (grade>=66 && grade<=75){
//     result = "BB"
// }else if (grade>=76 && grade<=90){
//     result = "BA"
// }else if (grade>=91 && grade<=100){
//     result = "AA"
// }else{}
//
// if (grade>= 0 && grade <= 100) {
//     console.log(`Your grade is ${grade}. Your result is ${result}`);
// }else if (grade < 0) {
//     console.log("Your grade should be bigger than or equal 0. Please enter your grade correctly");
// }else if (grade > 100) {
//     console.log("Your grade should be lower than or equal 100. Please enter your grade correctly");
// }else{
// }
// console.log("-----");

// ?2
/*const ay = prompt("ay: ");

switch (ay) {
  case "ocak":
    console.log(`ocak: 1`);
    break;
  case "subat":
    console.log("subat : 2");
    break;
  case "mart":
    console.log(`mart: 3`);
    break;
  case "nisan":
    console.log("nisan : 4");
    break;
  case "mayis":
    console.log(`mayis: 5`);
    break;
  case "haziran":
    console.log("haziran : 6");
    break;
  case "temmuz":
    console.log(`temmuz: 7`);
    break;
  case "agustos":
    console.log("agustos : 8");
    break;
  case "eylül":
    console.log(`eylül: 9`);
    break;
  case "ekim":
    console.log("ekim : 10");
    break;
  case "kasim":
    console.log(`kasim: 11`);
    break;
  case "aralik":
    console.log("aralik : 12");
    break;
  default:
    console.log("hatali giris yaptiniz");
    break;
}
console.log(result);
*/

// // ? SORU 2
// const month = prompt("Please enter any month name. (English keyword. Please dont use 'ç,ğ,ı,İ,ö,ü,ş')").toLocaleLowerCase()
// const month = "nisan";
// switch(month){
//     case "ocak" :
//         console.log(1);
//         break;
//     case "subat" :
//         console.log(2);
//         break;
//     case "mart" :
//         console.log(3);
//         break;
//     case "nisan" :
//         console.log(4);
//         break;
//     case "mayis" :
//         console.log(5);
//         break;
//     case "haziran" :
//         console.log(6);
//         break;
//     case "temmuz" :
//         console.log(7);
//         break;
//     case "agustos" :
//         console.log(8);
//         break;
//     case "eylul" :
//         console.log(9);
//         break;
//     case "ekim" :
//         console.log(10);
//         break;
//     case "kasim" :
//         console.log(11);
//         break;
//     case "aralik" :
//         console.log(12);
//         break;
//     default:
//         console.log("You didnt write correctly. Please try again.");
// }

//* Örneği tersten tekrar yapıyorum

/*const numberOfMonth = prompt("Please enter the number of month");
// const numberOfMonth = "4"
let monthName = "";

switch (numberOfMonth) {
  case "1":
    monthName = "ocak";
    break;
  case "2":
    monthName = "subat";
    break;
  case "3":
    monthName = "mart";
    break;
  case "4":
    monthName = "nisan";
    break;
  case "5":
    monthName = "mayis";
    break;
  case "6":
    monthName = "haziran";
    break;
  case "7":
    monthName = "temmuz";
    break;
  case "8":
    monthName = "agustos";
    break;
  case "9":
    monthName = "eylul";
    break;
  case "10":
    monthName = "ekim";
    break;
  case "11":
    monthName = "kasim";
    break;
  case "12":
    monthName = "aralik";
    break;
  default:
    console.log("You didnt write correctly. Please try again.");
}
console.log(monthName);
console.log("-----");
*/

// ? SORU 3
/*const number1 = prompt("Please enter first number");
const number2 = prompt("Please enter second number");
const number3 = prompt("Please enter third number");

// const number1= 1;
// const number2= 2;
// const number3= 3;

const total = number1 + number2 + number3;
const multiplication = number1 * number2 * number3;

console.log(`${total} is total`);
console.log(`${multiplication} is multiplication`);

let lower = number1;
if (number2 <= lower) {
  lower = number2;
}
if (number3 <= lower) {
  lower = number3;
}

console.log(`${lower} is lower`);

let biggest = number1;
if (number2 >= biggest) {
    biggest = number2;
}
if (number3 >= biggest) {
  biggest = number3;
}

console.log(`${biggest} is biggest`);
console.log("-----");
*/

// ? SORU 4
/*const num = prompt("Please enter the number");
// const num =1;

const oddOrEven =
  num % 2 > 0 ? `${num} is Odd Number ` : `${num} is Even Number `;
//   num % 2 !== 0 ? `${num} is Odd Number ` : `${num} is Even Number `;
console.log(oddOrEven);

// console.log(num % 2 > 0 ? `${num} is Odd Number ` : `${num} is Even Number `); //* Alternative
console.log("-----");
*/

// //? SORU 5

const choose = prompt(
    "Please enter    '1'    Celsius  from Fahrenheit" +
        "\n" +
        "Please enter    '2'    Fahrenheit from Celsius "
);
let resultOfConversion = "";

if (choose == 1) {
    const fahrenheit = prompt("Please enter fahrenheit degree");
    resultOfConversion = (fahrenheit - 32) / 1.8;
} else if (choose == 2) {
    const celsius = prompt("Please enter celcius degree");
    resultOfConversion = celsius * 1.8 + 32;
} else {
    console.log("Please enter your choose correctly");
}

if (resultOfConversion != "") {
    console.log(resultOfConversion.toFixed(1) + " " + "degree"); // Virgülden sonra 1 basamak alır
}
console.log("-----");
