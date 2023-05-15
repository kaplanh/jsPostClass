// ? =====================================
// ?           FUNCTIONS
// ? ======================================

// ?Structural programming (yapısal programlama),
//  programcılar kontrol yapılarını(if-else, switch-case, for, while, do -while gibi) kullanarak, programın işlem akışını belirlerler.Bu yapılar, kodun anlaşılır ve bakımı kolay hale gelmesini sağlar.
//? Procedural programming:
// Proje sürecinde problemi alt parçalara ayırarak, fonksiyonlar ve alt programlar oluşturarak daha modüler bir kod yapısı elde edilir.
//? Functional programming:
// Değişken değerlerinin yerine fonksiyonların kullanımı, kodun daha anlaşılır ve işlevsel olmasını sağlar.
//? Imperative programming:
// Programın doğrusal olarak sırayla çalışması, programcının adım adım işlemleri takip etmesine olanak tanır ve daha karmaşık programların geliştirilmesine yardımcı olur.
// ?Declarative programming:
// Sonucu ifade eden ifadeler kullanarak, kodun nasıl çalıştığını detaylı olarak belirtmek yerine sadece ne yapması gerektiğini ifade eder, bu da kodun daha anlaşılır ve kısa olmasını sağlar.
console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
// function yazdirMerhaba() {
//   // alert("Merhaba FS14")
//   console.log("Merhaba FS14");
// }

//! Declaration (Fonksiyonun cagrilmasi)
// yazdirMerhaba(); //! invoke, call
// yazdirMerhaba(); //! invoke, call
// yazdirMerhaba(); //! invoke, call

//* ORNEK2:
//*****************************************/

//! Parametre listesi (parametre-argüman listesi)
// function yazdirParametre(message, name) {
//   console.log(message, name);
// }
// yazdirParametre();
// yazdirParametre("Hello");
// yazdirParametre("Salut", "FS16");
// yazdirParametre("Hola", "FS17");
// yazdirParametre(12.4, true);

//! Parametre listesi (default deger atama)
// function yazdirParametre(message = 1, name = "Cohort14") {
//   console.log(message, name);
// }
// yazdirParametre();
// yazdirParametre("Hello");
// yazdirParametre("Hello", "FS15");
// yazdirParametre("Salut", "FS16");
// yazdirParametre("Hola", "FS17");
// yazdirParametre(12.4, true);

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Cohort14' atanmistir.

// yazdirParametre("Hallo");
// yazdirParametre("Ehlen");
// yazdirParametre();
//* ORNEK3:
//*****************************************/

// function yasHesabi(name, dtarihi) {
//   let yasiniz = `${name} ${2023 - dtarihi} yasindadir `;
//   console.log(yasiniz);
// }

//* ORNEK4:(önce new Date() object ini incele)
//*****************************************/
// tarihi sbt degilde güncel almak istersek
// console.log(new Date()); //?Sistem tarihi ve saati verir
// function calculate(name, yearOfBirth) {
//   const age = new Date().getFullYear() - yearOfBirth;
//   //   console.log(`${name} is ${age} years old`);
//   return age;
// }

// console.log(calculate("Ahmet", 1990));
// const ismetAge = calculate("Ismmet", 1890);
// console.log("Ismet's Age:", ismetAge);

//* new Date() object:
//*****************************************/
// console.log(new Date()); //? Sistem tarihi ve saatini verir.
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDay());
// console.log(new Date().getTime());
// console.log(new Date().getMinutes());
// console.log(new Date().getSeconds());
// console.log(new Date().getUTCMilliseconds());

//* ORNEK5(fonksiyonu degiskene atayip sonra cagirma-return ):
//******************************************/
// console.log(new Date()); //? Sistem tarihi ve saatini verir.

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   // console.log(`${name} is ${age} years old`);
//   return age;
// }

// console.log(calculate("Ahmet", 1990));
// const ismetAge = calculate("İsmet", 1890);
// console.log("Ismet's Age:", ismetAge);

//* ORNEK6:
//******************************************/

// function add(num1, num2) {
//   const sum = num1 + num2;
//   // console.log(sum);
//   return sum;
// }

// function addShort(num1, num2) {
//   // console.log((num1 + num2) / (num1 * num2));
//   return (num1 + num2) / (num1 * num2);
// }

// const result1 = add(3, 5); //8
// const result2 = add(5, 9); //14
// const result3 = addShort(5, 9); //14/45

// console.log(result1, result2);
// console.log(result3);

//* ORNEK7:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }
//? Alternatif olarak
// function isEvenOrOdd(num) {
//   let result;
//   if (num % 2 === 0) {
//     result = "EVEN";
//   } else {
//     result = "ODD";
//   }
//   return result;
// }

//? Alternatif olarak
// function isEvenOrOdd(num) {
//   return num % 2 === 0 ? "EVEN" : "ODD";
// }

// const num = prompt("Please enter a number:");
// console.log(`${num} is ${isEvenOrOdd(num)}`);
//* ORNEK8:
//*******************************************/
//? Console'dan girilen bir sayininnegatif positif veya 0 olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

// console.log(negatifOrPositif(2));

// function negatifOrPositif(num) {
//   if (num > 0) {
//     let result;
//     result = `${num}-Positif`;
//   } else if (num < 0) {
//     result = `${num}-Negatif`;
//   } else {
//     result = `${num}-Sifirdir`;
//   }
//   return result;
// }

// console.log(negatifOrPositif(2))=;
// *NOT
// bu yazim seklinde fonksiyon tanimlanmadan öncede cagriabiliyor
// yazdirMerhaba() //? hoisting oluyor (var değişkenleri)

// function yazdirMerhaba() {
//   console.log("Merhaba FS14")
// }
// yazdirMerhaba()

//* ----------------------------
