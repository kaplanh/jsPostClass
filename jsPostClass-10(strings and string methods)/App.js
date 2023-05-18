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
alert("1- ders \n2-Kayit\n3-pre-cla\bss \t tab örnegi");
console.log("1- ders \n2-Kayit\n3-pre-cla\b ss \t tab örnegi");
// *soru:bunu baska nasil yapabilirdik

// alert(`1- ders
// 2-Kayıt
// 3-pre-class`)
