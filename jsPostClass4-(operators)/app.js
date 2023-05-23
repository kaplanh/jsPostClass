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
// ? toplama(+)
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
// let x = 1 + 1;
// let x = "1" + 1;
// let x = 1 + 1 + "1";
// let x = 1 + 1 + "1" + 1 + 2;
// let x = 1 + "a";
// let x = "a" + "b";
// document.getElementById("aritmetik").innerHTML = x + " " + typeof x;

// ? cikarma(-)
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

// ? *carpma(*)
// let carp1 = 7;
// let carp2 = 9;
// let carpma = carp1 * carp2;
// document.getElementById("aritmetik").innerHTML = carpma + " " + typeof carpma;

// let x = "a" * "b";
// let y = "a" * 3;

// document.getElementById("aritmetik").innerHTML +=
//   x + " " + typeof x + "<br/>" + y + " " + typeof y;

// Number(null)                   // 0
// Number(undefined)              // NaN
// Number(true)                   // 1
// Number(false)                  // 0
// Number(" 12 ")                 // 12
// Number("-12.34")               // -12.34
// Number("\n")                   // 0
// Number(" 12s ")                // NaN
// Number(123)                    // 123

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
// true + false             // 1
// true + false
// ==> 1 + 0
// ==> 1

// 12 / "6"                 // 2

// 12 / '6'
// ==> 12 / 6
// ==>> 2
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
