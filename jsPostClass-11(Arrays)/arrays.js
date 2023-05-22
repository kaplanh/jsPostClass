//* "use strict";
//?use strict icin bakiniz => https://www.yusufsezer.com.tr/javascript-use-strict/

//!Array
// const arr = [100, "CW", false];
// console.log(arr);

// const dizi = new Array(100, "CW", true);

// console.log(dizi);

// const dizi2 = new Array();
// const dizi3 = new Array(10);

// console.log(dizi2);
// console.log(dizi3);

// const colors = ["Red", "Green", "Blue"];

// console.log(colors[0]);
// console.log(colors[colors.length - 1]); //son elaman
// console.log(colors[colors.length - 2]); //sondan ikinciye ulaşım.
// console.log(colors[-1]); //undefined
// console.log(colors[56]); //undefined

// !Array is Array
// const colors = ["Red", "Green", "Blue"];
// console.log(typeof colors);

// console.log(Array.isArray(colors)); //true
// console.log(colors instanceof Array); //true

// const variables = "1";
// console.log(Array.isArray(variables)); //false
// console.log(variables instanceof Array); //false

// !Strings immutable değiştirilemez
// let str = "Brown";
// console.log(str[0]);
// str[0] = "b";
// console.log(str);

// str = 'brown'

// !Arrayle mutable yani değiştirilebilir
// const colors = ["Red", "Green", "Blue"];

// colors[1] = "yellow"; //mevcudu değiştirir

// console.log(colors);

// //ekleme yapar
// colors[3] = 5;

// console.log(colors);

// let c = "Pink";

// colors[4] = c;

// console.log(colors);

// const colors = ["Red", "Green", "Blue"];

// colors[6] = 2;
// console.log(colors);
// console.log(colors.length);
// console.log(colors[3]);

// colors[100] = "Pink";

// console.log(colors);

//!primitiveler
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 6;
// console.log(a);
// console.log(b);

// b = a;
// console.log(b);

//!non-primitiveler

let arr1 = [1, 2, "Three", false];

const arr2 = arr1;

console.log(arr1);
console.log(arr2); // ?nedenini anlamak icin yandaki Stack - Heap fotosuna bak

arr1[0] = 0;

console.log(arr1);
console.log(arr2);

const c = ["2"];
console.log(c);

console.log(Boolean(c));

const d = ["2"];
console.log(c == d); //false çünkü adresleri farklı

console.log(arr1 == arr2); // true çünkü adresler aynı

arr1 = ["four"]; //let ile tanımlandığı için onaylanır

arr2 = ["four"]; // const ile tanımlandığı için onay verilmez

//!Array metodları

// .shift() → Dizinin ilk ogesini kaldırır.Orjinal diziyi degistirir.
// .pop() → Dizinin son ogesini kaldırır.Orjinal diziyi degistirir.
// .unshift() → Dizinin basına yeni degerler eklemek için kullanılır.Orjinal diziyi degistirir.
// .push() → Dizinin sonuna eleman eklemek için kullanılır.Orjinal diziyi degistirir.
// .slice() → Kendisine parametre olarak verilen dizi aralıgında bulunan degerleri kopyalar ve yeni bir dizi olusturarak geri döndürür.Orjinal diziyi degistirmez.
// .splice() → Diziden elemanları kaldırır, degistirir veya çıkan elemanın yerine eleman ekler.Orjinal diziyi degistirir.
// .concat() → İki veya daha fazla diziyi yeni bir dizide birlestirir.Orjinal diziyi degistirmez.
// .include() → Dizinin ogeyi içerip içermedigini kontrol eder. Boolean deger döner.
// .indexOf() → Dizinin ogeyi içerip içermedigini kontrol eder. İndex numarasını döner. Bulamazsa -1 döner.
// .lastIndexOf() → Dizinin ogeyi içerip içermedigini kontrol eder ve sondan baslar. İndex numarasını döner.
// .reverse() → Diziyi tersine çevirir. İlk index sonuncu, sonuncu index ise ilk index olur.Orjinal diziyi degistirir.
// .join() → Virgülle veya birtilen herhangi bir ayraçla ayrılmıs dizi ogelerinden olusan yeni bir string döndürür.Orjinal diziyi degistirmez.
// .sort() → Bir dizinin ogelerini artan UTF-16 düzeninde sıralar.Orjinal diziyi degistirir.
// .toString() → Diziyi string'e oldugu gibi dönüstürür.Orjinal diziyi degistirmez.
// .at() → bastan elemanlara ulasmak istiyorsak pozitif deger sondan elemanlara ulasmak istiyorsak negatif deger veriyoruz.ES2022 ile geldi.
