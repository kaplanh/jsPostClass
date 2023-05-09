// ? atamada büyük kücük harf önemli
// let deneme = 5;
// let Deneme = 6;
// const myVar1 = 7;

// ?ciktiyi console da degilde html live server de görmek istiyorsak
// console.log(deneme);
// document.getElementById("aritmetik").innerHTML = "deneme = " + deneme;

// ?önceki yazilanlar silinmesin altina devam etsin istiyorsak += kullanmaliyiz
// document.getElementById("aritmetik").innerHTML +=
//   "<br/>" +
//   "Deneme = " +
//   Deneme +
//   "<br/>" +
//   "veli" +
//   "<br>" +
//   "Deneme =" +
//   Deneme +
//   "<br/>" +
//   "myVar = " +
//   myVar1;

//! Aritmetik Operatörler
// ? toplama operatörü(+)
// const num1 = 10;
// const num2 = 69;

// const toplam = num1 + num2;
// num1 ve num2 operand , + operator olark adlandırılıyor.

// document.getElementById("aritmetik").innerHTML += "toplam =" + toplam;

// const msg1 = "Hello ";
// const msg2 = "World!";

// const mesaj = msg1 + msg2;
// document.getElementById("aritmetik").innerHTML = mesaj;

// const firstName = "Koray";
// const lastName = "Koksal";
// const fullName = firstName + " " + lastName;
// console.log(firstName, lastName);
// console.log(firstName + " " + lastName);
// document.getElementById("aritmetik").innerHTML = fullName;
// document.getElementById("aritmetik").innerHTML = firstName + " " + lastName;

// *örnekler
// let x = 1 + 1;//2
// let x = "1" + 1;//11
// let x = 1 + 1 + "1"; //21
// let x = 1 + 1 + "1" + 1 + 2; //2112
// let x = 1 + "a";//1a
// let x = "a" + "b";//ab
// document.getElementById("aritmetik").innerHTML = x + " " + typeof x;

// ? cikarma operatörü(-)
// const x = 55;
// const y = 44;
// console.log(x - y);

// const x = 10;
// const y = "1";

// const a = "b";
// const z = x - y;
// const v = y - a;
// document.getElementById("aritmetik").innerHTML = typeof z;
// document.getElementById("aritmetik").innerHTML += v;

// *örnekler
// let x = 10 - 5;
// let x = 10 - "5";
// let x = "10" - 5;
// let x = "10" - "5";
// let x = 10 - "a";
// let x = "a" - "b";

// document.getElementById("aritmetik").innerHTML += x + " " + typeof x;

// ? *carpma operatörü(*)
// *örnekler
// *1
// let carp1 = 7;
// let carp2 = 9;
// let carpma = carp1 * carp2;
// document.getElementById("aritmetik").innerHTML = carpma + " " + typeof carpma;

// *2
// let x = "a" * "b";
// let y = "a" * 3;

// document.getElementById("aritmetik").innerHTML +=
//   x + " " + typeof x + "<br/>" + y + " " + typeof y;

//? bölme (/) operatörü
// *örnekler
// *1
// const böl1 = 81;
// const böl2 = 9;

// document.getElementById("aritmetik").innerHTML = böl1 / böl2;

// *2
// const x = böl1 / "9";
// document.getElementById("aritmetik").innerHTML = x + typeof x;
// *3
// document.getElementById("aritmetik").innerHTML = böl1 / "dokuz";
// *4
// document.getElementById("aritmetik").innerHTML = böl2 / 0;
// *5
// document.getElementById("aritmetik").innerHTML = -61 / 0;
// *6
// document.getElementById("aritmetik").innerHTML = 0 / 5; //0
// *7
// document.getElementById("aritmetik").innerHTML = 0 / -5; // -0
// document.getElementById("aritmetik").innerHTML = 0 / 0;
// console.log(0 / 0);
// *8
// document.getElementById("aritmetik").innerHTML = 57 / 9;

//? Mod Alma(%) operatörü (Bölmedeki kalan sayıyı bulur)
// *örnekler
// *1
// const mod1 = 57;
// const mod2 = 9;
// document.getElementById("aritmetik").innerHTML = mod1 % mod2;
// *2
// document.getElementById("aritmetik").innerHTML = 22 % 7;

// *basamaktaki sayilari bulma örnekleri
const benimSayim = 967;
// document.getElementById("aritmetik").innerHTML = benimSayim % 10;

// document.getElementById("aritmetik").innerHTML = Math.floor(
//   (benimSayim % 100) / 10
// );
// ((benimSayim % 100) - (benimSayim % 10)) / 10;
// Math.floor((benimSayim / 10) % 10);

// const yüzlerBas = Math.floor(benimSayim / 100);
// document.getElementById("aritmetik").innerHTML = yüzlerBas;
// *üs(**)

// document.getElementById("aritmetik").innerHTML = 2 ** 3;
// document.getElementById("aritmetik").innerHTML = 2 ** 2;
// document.getElementById("aritmetik").innerHTML = 4 ** 0.5;

// //?Bazi hazır fonksiyonlar
// *Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar

// document.getElementById("aritmetik").innerHTML = Math.ceil(967 / 4);

//* Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// document.getElementById("aritmetik").innerHTML = Math.floor(967 / 4);

//* Math.trunc(); //* sayinin tam kismini alir.
// document.getElementById("aritmetik").innerHTML = Math.trunc(967 / 4);

//* Math.round(); //* en yakin tam sayiya yuvarlar.

// document.getElementById("aritmetik").innerHTML = Math.round(967 / 4);
// document.getElementById("aritmetik").innerHTML = Math.round(23.5);
//* Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// !default olarak 0-1 arasinda rasgele bir sayi üretir
// document.getElementById("aritmetik").innerHTML += "<br/>" + Math.random();

//  0-10 arasinda rasgele bir sayi üretir
// document.getElementById("aritmetik").innerHTML += "<br/>" + Math.random() * 10;
//!  0-100 arasinda rasgele bir sayi üretir
// document.getElementById("aritmetik").innerHTML += "<br/>" + Math.random() * 100;
//!  1-2 arasinda rasgele bir sayi üretir
// document.getElementById("aritmetik").innerHTML += "<br/>" + (Math.random() + 1);
//!  2-12 arasinda rasgele bir sayi üretir
// document.getElementById("aritmetik").innerHTML +=
//     "<br/>" + (Math.random() * 10 + 2);

// !toFixed(basamakSayısı):
// . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

// document.getElementById("aritmetik").innerHTML +=
//   "<br/>" + Math.random().toFixed(1);

//*örnekler

// const pi = 3.14;
// const yariCap = 9;
// const alan = pi * yariCap ** 2;
// document.getElementById("artirma-azaltma").innerHTML = 4 ** 0.5;
// console.log("alan = " + alan);
// console.log(`alan = ${Math.trunc(alan)}`); //* sayinin tam kismini alir.
// console.log(`alan = ${Math.floor(alan)}`); //* her zaman en yakin alt tam sayiya yuvarlar
// console.log(`alan = ${Math.ceil(alan)}`); //* her zaman en yakin ust tam sayiya yuvarlar
// console.log(`alan = ${Math.round(alan)}`); //* en yakin tam sayiya yuvarlar

// const hazirSayi = 56.788888;
// console.log(hazirSayi.toFixed(3));
// console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `);
// *. dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.
// let sayi = Math.random();
// console.log(sayi);
// console.log(Math.round(sayi * 10));
// console.log(Math.round(sayi * 100));
// console.log(Math.round(Math.random() * 50));
// console.log(Math.round(Math.random() * 2));
// console.log(Math.round(Math.random() + 1));
// console.log(Math.random() - 1);
// console.log(Math.round(Math.random() - 1));
// console.log(Math.round(-0.6));
// console.log(Math.round(-0.5));
// console.log(Math.round(-0.4));

//? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

// sonrası artırma ve eksiltme

// let number1 = 6;
// let artirNew = number1 // 6

// number1 = number1 + 1// 7
// let number = 5;
// let number1 = number++;
// console.log(number1);
// console.log(number);

// let number1 = ++number;
// console.log(number1);
// console.log(number);
// let number1New = number1++; // önce atadı sonrasında number1 değişkenini bir number1dı
// console.log(number1New); // 6
// console.log(number1); // 7
// console.log(number1New); // 6

// let newSayi = ++number; // önce artır sonra ata
// console.log(newSayi); //
// console.log(--newSayi); //
// console.log(newSayi--); //
// console.log(newSayi); //

// let randomNumber = Math.random() - 1;
// console.log(randomNumber);
// console.log(Math.round(randomNumber));

// //! 🔥🔥🔥              Atama Operatörleri

// let nums1 = 14;
// let nums2 = 17;
// //! += Ekle ve Sonucu Ata
// nums2 = nums2 + nums1;
// //? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.
// nums2 += nums1;
// console.log(nums2);

let num14 = 6;
let num15 = 3;

// //! -= Çıkar ve Sonucu Ata
// num14 = num14 - num15;
// num14 -= num15;
// console.log(num14); // 3

// //! *= Çarp ve Sonucu Ata
// num14 = num14 * num15;
// num14 *= num15;
// console.log(num14); //18
// //! /= Böl ve Sonucu Ata
// num14 = num14 / num15;
// num14 /= num15;
// console.log(num14);
// //! /= Bölümden Kalanı Bul ve Ata
// num14 = num14 % num15;
// num14 %= num15;
// console.log(num14);

// //! **= Üs Al ve Sonucu Ata
// num14 = num14 ** num15;
// num14 **= num15;
// console.log(num14);

//! 🔥🔥🔥              Karşılaştırma Operatörleri

// const num16 = 27;

// console.log(num16 == 27); //true
// console.log(27 == "27"); // true
// //? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.

// console.log(num16 === 27); // true
// console.log(27 === "27"); // false
//? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

// const user1 = prompt("Lütfen bir sayı griniz: ");
// const user2 = prompt("Lütfen bir sayı griniz: ");
// console.log(user1);
// console.log(user2);
// const isSame = user1 == user2;
// console.log(isSame);
// console.log("'10'" == "10"); //false

// console.log(true == 1); //true
// console.log(false == 0); //true
// console.log(null == undefined); // true
// true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
// console.log(true === 1); // false
// console.log(null === undefined); // false
// console.log(typeof null, typeof undefined); // false

// //? !=, !==

// console.log(15 != "15"); // false. çünkü değerleri eşit
// console.log(15 !== "15"); // true. çünkü typeları eşit değil

// //? >, < (Büyük mü?, Küçük mü?)
// console.log(15 > 5); // true
// console.log(15 < 5); // false

// console.log("15" > 5); // true

// console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
// console.log("a".charCodeAt()); // 97
// console.log("b".charCodeAt()); // 98
//. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
// console.log("a" > "A");// true
// console.log("a" > "Z"); // true
// console.log("Z" > "a"); //false

// //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

// console.log(15 >= 15); //true
// console.log(15 <= 15); // true
// console.log(15 >= 16); // false
// console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
// console.log(15 >= "15"); // true
// console.log("14" <= "15"); // true

//! 🔥🔥🔥              Mantıksal Operatörler

//! && and
// console.log(true && true); // true
// console.log("" && true); // ''
// console.log(" " && true && 2 && 6 && "ali" && "veli" && true); // true

// console.log(5 && "Merhaba"); // "Merhaba"
// console.log(0 && "Dünya"); // 0
// // && operatoru ilk gördüğü falsy veya false değerini döner.
// console.log(5 && 0); // 0
// console.log(true && false); // false

//! || or
// console.log(true || false); //true
// console.log(5 || 15); // 5
// console.log(5 || 0); // 5
// console.log("" || "Merhaba"); // "Merhaba"
// console.log("" || 0); // 0
// // || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.

// ! not
// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!5); // false

// falsy
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(0n)); // false
// console.log(Boolean("")); // false (boş string)
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

// truthy
// console.log(Boolean(true)); // true
// console.log(Boolean({})); // true (boş object)
// console.log(Boolean([])); // true (boş array)
// console.log(Boolean(5)); // true
// console.log(Boolean("0")); // true (dolu string)
// console.log(Boolean("false")); // true (dolu string)
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(new Date())); // true (tarih methodları)
// console.log(Boolean(function () {})); // true (boş fonksiyon)
// console.log(
//   Boolean(function () {
//     console.log("Hello World!");
//   })
// ); // true (boş fonksiyon)

//! İşlem Önceliği sıralaması
// 1. ! (not)
// 2. && (and)
// 3. || (or)
// const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0);
// console.log(karşilaştırma); // dünya

//?mantik operatörleri il ilgili soru:
// let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"));
// let final = Number(prompt("Lütfen final notunuzu giriniz ?"));
// let canEgrisi = 65;
// const sonuç = ?
// kullanıcıdan vize ve final notunu prompt olarak alın. sabit bir canEgrisi(ortalama) belirleyiniz.
//! Kullanıcının vize ve final ortalaması canEgrisine eşit veya büyükse Kullanıcıya "Geçtiniz" mesajı dönünüz. Eşit veya büyük değilse "Kaldınız" şeklinde mesaj dönününüz.
//! Not: prompt tan gelen veriler string olarak geliyor o nedenle dönüştürme işlemi yapıyoruz.

// ?cevap :
// let vize = Number(prompt('vize notunuz: '));
// let final = +prompt('final notunuz: ');
// let can = 65;
// let ort =  (vize * .3 + final * .7);
// console.log(((ort == can || ort > can) && "Geçtiniz") || "Kaldınız");

// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

// let sayi = +prompt("Bir sayi girinz:") //? 100
// console.log(typeof sayi)
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination

// console.log(++sayi)

// console.log(Number("123")) //? 123
// console.log(Number("12.3")) //? 12.3
// console.log(Number("0")) //? 0
// console.log(Number(" ")) //? 0
// console.log(Number("")) //? 0
// console.log(Number(null)) //? 0
// console.log(Number(undefined)) //? NaN

// const myNumber = "threezeroone" //? string
// let myNumber2 = Number(myNumber)
// console.log(myNumber2) //? NaN
// console.log(typeof myNumber2) //? number

// const dolar = "1000.3"
// const tl = "2000.2"

// const totalMoney = Number(dolar) + +tl
// console.log(totalMoney)

//* ALternatif olarak parseInt() ve parseFloat() da kullanilabilir.
// const dolarInt = parseInt(dolar) //? tamsayiya cevirir
// console.log(dolarInt)
// const tlFloat = parseFloat(tl) //? virgüllü sayiya çevirir
// console.log(tlFloat)

// console.log(parseFloat(null)) //? NaN
// console.log(parseFloat("")) //? NaN
// console.log(parseFloat(undefined)) //? NaN

//? String
// const myNumber3 = 2000.5
// console.log(String(myNumber3))

// *Meraklisina

// true + false
// 12 / "6"
// "number" + 15 + 3
// 15 + 3 + "number"
// [1] > null
// "foo" + + "bar"
// 'true' == true
// false == 'false'
// null == ''
// !!"false" == !!"true"
// [‘x’] == ‘x’
// [] + null + 1
// [1,2,3] == [1,2,3]
// {}+[]+{}+[1]
// !+[]+[]+![]
// new Date(0) - 0
// new Date(0) + 0

// *cevaplar
//? nedenlerini anlamak icin bu linkteki yaziya göz atabilirsiniz  https://medium.com/@kplnhsyn.49/list/reading-list
// true + false             // 1
// 12 / "6"                 // 2
// "number" + 15 + 3        // 'number153'
// 15 + 3 + "number"        // '18number'
// [1] > null               // true
// "foo" + + "bar"          // 'fooNaN'
// 'true' == true           // false
// false == 'false'         // false
// null == ''               // false
// !!"false" == !!"true"    // true
// ['x'] == 'x'             // true
// [] + null + 1            // 'null1'
// [1,2,3] == [1,2,3]       // false
// {}+[]+{}+[1]             // '0[object Object]1'
// !+[]+[]+![]              // 'truefalse'
// new Date(0) - 0          // 0
// new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
