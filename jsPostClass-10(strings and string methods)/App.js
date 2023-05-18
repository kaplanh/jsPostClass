// !String yazim sekilleri
// *Örnek
// let str1 = "This is a string"
// let str2 = 'This is a string'
// let str3 = `This is a string`
// let str4 = new String("This is a string")
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// !JavaScript Çok Satırlı Dizeler
// ?using the + operator
// const message1 =
//   "This is a long message " +
//   "that spans across multiple lines" +
//   "in the code.";

// console.log(message1);

// // //? using the \ operator
// const message2 =
//     "This is a long message \
// that spans across multiple lines \
// in the code.";
// console.log(message2);

// // //? using the ``
// const message3 = `This is a long message
// that spans across multiple lines
// in the code.`;
// console.log(message3);
// // //? using the `` and \
// const message4 = `This is a long message
// that spans across multiple lines \
// in the code.`;
// console.log(message4);

//!string types
// console.log(typeof str1)
// console.log(typeof str2)
// console.log( str3)
// console.log( str4)

// *örnek
// const a = 'hello';
// const b = new String('hello');

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);
// ?Not:string objectleri (Dize nesneleri) kullanmaktan kaçınılması önerilir. Dize nesneleri kullanmak programı yavaşlatır.

//!String(Dize) Karakterlerine Erişim
// *örnek
// ?1.yol
// const str = 'Hello World';

// console.log(str[0])
// console.log(str[-1])
// console.log(str[str.length-1])
// console.log(str[6])
// console.log(str[10])
// console.log(str[11])
//? not:String(Dize) nin boyu Karakter sayisini hesaplama
// console.log(str.length)

// ?2.yol
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(-1));
// console.log(str.charAt(str.length - 1));
// console.log(str.charAt(10));
// console.log(str.charAt(11));

//?3.yol itere
// ?A
// for (let i=0; i<str.length; i++){
//     console.log(str[i]);
// }
// // ?B
// for (let i = str.length; i > 0; i--){
//     console.log(str[i-1])
//   }

// //?tersten itere
// for(let i = str.length -1   ; i>=0; i--){
//     console.log(str[i])
//   }

//!JavaScript Dizeleri değişmez
// *örnek
// let a = "hello";
// console.log(a);
// a[0] = "H";
// console.log(a);
// a = 'Hello'
// console.log(a);

// *soru: a'nin degerini degeistirmek istersem ne yapmaliyim?
// a = 'Hello'
// console.log(a);

//!JavaScript Büyük/Küçük Harfe Duyarlıdır
// const a = "a";
// const b = "A";
// console.log(a === b);

//!Kaçış Karakterleri
//? Bir string'e(dizeye) özel karakterler eklemek için \ ters eğik çizgi kaçış karakterini kullanabilirsiniz.
// Code	Output
// \0    a gap
// \"	include double quote
// \\	include backslash
// \n	new line
// \r	carriage return
// \v	vertical tab
// \t	horizontal tab
// \b	backspace
// \f	form feed

// *\ 'a örnek
// let str0 = 'I'm a string' //hata verirken
// let str1 = "I'm a string" //hata vermez
// let str2 = 'I\'m a string' //hata vermez
// console.log(str1)
// console.log(str2)

// *\0 'a örnek
// let str2 = "I'm a\0str\0ing\"";
// console.log(str2);

// *\n ' örnek
// alert("1- ders \n2-Kayit\n3-pre-class");

// *soru:bunu baska nasil yapabilirdik

// alert(`1- ders
// 2-Kayıt
// 3-pre-class`)

// *\t örnek
// console.log("1- ders\ttab örnegi");

// *\b örnek
// alert("1- d\bers ");
// !JavaScript String() Function
// const a = 225; // number
// const b = true; // boolean

// //converting to string
// const result1 = String(a);
// const result2 = String(b);

// console.log(result1); // "225"
// console.log(result2); // "true"

// !String Metodlari
// * Örnekler
// *1// concatenating two strings
// const text1 = "hello";
// const text2 = "  world";
// const text3 = "     JavaScript     ";

// const result1 = text1.concat(" ", text2);
// console.log(result1);

// const result2 = text1.concat(" ", text2, " ", text3);
// console.log(result2);

// *2converting the text to uppercase
// const text1 = "hello world,js html";
// const text2 = "  world";

// const result2 = text1.toUpperCase();
// console.log(result2);

// const result4 = text2.toUpperCase();
// console.log(result4);

// *3// removing whitespace from the string
// const text1 = "hello world,js html";
// const text2 = "  world";
// const text3 = "     JavaScript     ";
// const text4 = "html,css,JavaScript,react"

// const result3 = text3.trim();
// console.log(result3);

// const result5 = text2.trimStart();
// const result6 = text2.trimEnd();
// console.log(result5);
// console.log(result6);

// * 4 converting the string to an array
// const text1 = "hello world,js html";
// const text2 = "  world";
// const text3 = "     JavaScript     ";
// const text4 = "html,css,JavaScript,react";

// const result4 = text1.split();
// const result5 = text1.split("");
// const result6 = text1.split(" ");
// const result7 = text1.split(" ", 1);
// const result8 = text1.split(" ", 4);
// const result9 = text1.split(",");
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);
// console.log(result8);
// console.log(result9);

// const result10 = text4.split(",", 3);
// console.log(result10);

// *5// slicing the string
// const text1 = "hello world,js html";
// const text2 = "  world";
// const text3 = "     JavaScript     ";
// const text4 = "html,css,JavaScript,react";

// const result5 = text1.slice();
// const result6 = text1.slice(4);
// const result7 = text1.slice(0, 3);
// const result8 = text1.slice(-1);
// const result9 = text1.length;
// const result10 = text1.slice(20);
// const result11 = text1.slice(3, 0);
// const result12 = text1.slice(-19, 19);
// const result121 = text1.slice(-19, text1.length);
// const result13 = text1.slice(-18, -1);
// console.log(result5);
// console.log(result6);
// console.log(result7);
// console.log(result8);
// console.log(result9);
// console.log(result10);
// console.log(result11);
// console.log(result12);
// console.log(result121);
// console.log(result13);

// const result8 = text1.slice(text1.length - 1);
// const result9 = text1.slice(-1);

// console.log(result8);
// console.log(result9);
// console.log(result10);
