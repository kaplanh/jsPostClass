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
// ?=======================================================

//!slice(start, end)
//!orjinal-stringi degistirmez
// ?slice(),dilöim  bir dizgenin bir kısmını çıkarır ve çıkarılan kısmı yeni bir dizgede döndürür. bu yöntem 2 parametre alır: başlangıç ​​konumu ve bitiş konumu (bitiş dahil değildir).

// ?JavaScript konumları sıfırdan sayar. İlk konum 0'dır. İkinci konum 1'dir.
// ?Bir parametre negatifse, konum dizenin sonundan itibaren sayılır:

// let str1 = "Clarusway";
// let str2 = str1.slice(-3);
// console.log(str1)
// console.log(str2)
// console.log(str1.slice(-9,-3))
// console.log(str1);

//!substring(start, end)
//!orjinal-stringi degistirmez
// ?substring(), slice() benzer. Aradaki fark, 0'dan küçük başlangıç ​​ve bitiş değerlerinin substring()'de 0 olarak ele alınmasıdır.
//?İkinci parametreyi atlarsanız, substring() dizenin geri kalanını kesip çıkarır.
// let str = "Orange";
// console.log(str.substring(0, 4));
// console.log(str.substring(4, 0));
// console.log(str.substring(2)); // 2 den başla sona kadar git
// console.log(str.substring(str.length - 4)); //son 4 karakteri getir
// console.log(str.substring(-4)); //çalışmaz

// console.log(str);

// let str2 = str.substring(0, 4);
// console.log(str2);
// console.log(str);

// !substr(start, length);
//!orjinal-stringi degistirmez
// ?substr(), slice()'e benzer. Aradaki fark, ikinci parametrenin çıkarılan parçanın uzunluğunu belirtmesidir.
// ?İkinci parametreyi atlarsanız, substr() dizenin geri kalanını dilimler halinde keser.

//?İlk parametre negatifse, konum dizenin sonundan itibaren sayılır.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

//!replace
// !replace() yöntemi, belirtilen bir değeri bir dizedeki başka bir değerle değiştirir:
//!orjinal dizeyi değiştirmez.
// ?Not
//? replace() yöntemi yeni bir dize döndürür.
//? replace() yöntemi yalnızca ilk eşleşmeyi değiştirir

// let str = "Mr Brown has a brown house and a brown car";

// let newStr = str.replace("brown", "red");
// let newStr2 = str.replace(/brown/i, "red"); // casesensitivite ignore eder
// let newStr3 = str.replace(/brown/gi, "red"); // ne kadar varsa değiştirir.
// let newStr4 = str.replace(/brown/g, "red"); // küçük brownların tümünü değiştirir.

// console.log(newStr);
// console.log(newStr2);
// console.log(newStr3);
// console.log(newStr4);
// console.log(str);
// ?Regular Expressions (RegExp)(Düzenli ifadeler) icinhttps://www.w3schools.com/jsref/jsref_obj_regexp.asp

//!replaceAll
// ?replaceAll() yöntemi, değiştirilecek bir dize yerine normal bir ifade belirtmenize olanak tanır. Parametre normal bir ifadeyse, genel işaret (g) ayarlanmalıdır, aksi takdirde bir TypeError atılır.
// let str = "Mr Brown has a brown house and a brown car";

// console.log(str.replaceAll("brown", "red")); // sorguyu uyan tüm sonuçları değiştirir.

//!concat

// let str1 = "Clarusway";
// let str2 = "Full";
// let str3 = "Stack";
// const result = str1.concat(" ", str2, " ", str3);
// console.log(result);
// console.log(str3);

// let greet = 'Hello'

// console.log(greet.concat(' World'))
// console.log('Hello'.concat(' World'))

// let isim = prompt("İsminiz nedir?");

// console.log("Merhaba ".concat(isim));

// console.log("Merhaba " + isim);

//!includes

// let str1 = "Clarusway";

// console.log(str1.includes('l'))
// console.log(str1.includes('l',1)) //1.indexten aramaya başla
// console.log(str1.includes('l',2)) //2. indexten aramaya başla

//!indexof(aranan karakter, bulundugu index ve indexten sonra aranacagi)
// let str1 = "ruswaClay";

// console.log(str1.indexOf("a"));
// console.log(str1.indexOf("a", 2));
// console.log(str1.indexOf("l", 3));

//*örnek1 mailde @ kontrolü
// ?1.yol ternary
// const mail = prompt("Mailiniz:");

// mail.indexOf("@") === -1 ? alert("gecersiz") : alert("gecerli");

//?2,yol

// let email=prompt("email giriniz")
// console.log(email.includes("@"));

// let email = prompt("Enter your email")

// if (email.indexOf("@") === -1) {
//   console.log("Invalid email")
// } else{
//     console.log('Valid email')
// }
//*örnek2 string icinde bir kelimenin kac defa gectigini bulma

// function findCount(source, search) {
//   let count = 0; // counter will start from 0
//   let position = source.indexOf(search); // first search

//   while (position !== -1) {
//     // as long as we find search string, loop will go on
//     count++; // increase the counter
//     position = source.indexOf(search, ++position); // search again, from where we stop +1
//   }
//   return count;
// }

// let str = "You do not know what you do not know until you know.";
// console.log(findCount(str, "not")); // 3

//!lastIndexof

// let str = "Hello John, welcome to Clarusway.";

// console.log(str.lastIndexOf("o"));

// console.log(str.lastIndexOf("o", 6));
// console.log(str.lastIndexOf("O", 6));

// console.log(str.indexOf("o"));

//!search()

// let str = "You do not KNOW what you do not know until you know.";

// console.log(str.search("know")); // 32

// console.log(str.search(/know/)); // 32 with regular expression

// console.log(str.search(/know/i)); // 11 (i means not case sensitive)
// console.log(str.search(/klow/i)); // -1 içerisinde yoksa -1 döner

// let str1 = "Hello World";
// const arama = /[A-Z]/; // A-Z arası bütün büyük harfler
// const arama2 = /[a-z]/; // a-z arası bütün kücük harfler

// console.log(str1.search(arama));
// console.log(str1.search(arama2));

//!split
// ?stringi array e çevirir.
//?orjinali degistirmez

// let str = "Welcome to: Full Stack";

// console.log(str.split());
// console.log(str.split(" "));
// console.log(str.split(":"));
// console.log(str.split("Full"));
// console.log(str.split("full"));

// let arr = str.split(" ");

// console.log(arr);
// console.log(str);

// let text = "abc,d,e,f ";
// console.log(text.split(","));
// console.log(text.split(""));
//! toLowercase & toUpperCase

// let str = "Welcome to Full Stack";
// let str = "ĞŞİüöÇççççüüğğşşiiiööçç";
// console.log(str.toLowerCase());

// !toLocaleLowerCase();
// console.log(str.toLowerCase());
// console.log(str.toLocaleLowerCase())
// console.log(str.toUpperCase());
// console.log(str.toLocaleUpperCase('TR'));

//!trim(),trimStart(),trimEnd()
// !orjinali degistirmez

// let str = "     Welcome to Full Stack    ";
// console.log(str);
// console.log(str.trim()); // Hem balştaki hem sondaki boşlukları temizler
// console.log(str.trimStart()); // Baştaki boşlukları temizler
// console.log(str.trimEnd()); // sondaki boşlukları temizler
// console.log(str);
//! startsWith & endWith

// let str = "clarusway@Clarusway.com is our e-mail address";

// console.log(str.startsWith("clarusway"))
// console.log(str.startsWith("Clarusway"))
// console.log(str.startsWith("Clarusway",10))

// *örnek
// let email = "clarusway@Clarusway.com"
// console.log(email.endsWith('com'))

// !match() method

// let text = "The rain in SPAIN stays mainly in the plain";
// const str1 = text.match("ain");
// console.log(str1.length + " " + str1);

// const str2 = text.match(/ain/gi);
// console.log(str2.length + " " + str2);

// ?Bir normal ifade, g değiştiricisini (genel arama) içermiyorsa, match() yalnızca dizedeki ilk eşleşmeyi döndürür.

// !matchAll();
// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// const iterator = text.matchAll("Cats");
// console.log(iterator);
// console.log(Array.from(iterator));

// const iterator2 = text.matchAll(/Cats/gi);
// console.log(iterator2);
// console.log(Array.from(iterator2));

// !padStart();

// ?ECMAScript 2017, JavaScript'e iki yeni dize yöntemi ekledi: bir dizenin başında ve sonunda dolguyu desteklemek için padStart() ve padEnd().

// let text = "5";
// let padded = text.padStart(4, "0");

// let padded1 = text.padStart(4, "x");
// console.log(padded);
// console.log(padded1);

// ?padStart() yöntemi bir dizi yöntemidir. Bir sayıyı doldurmak için önce sayıyı bir dizeye dönüştürün.
// let numb = 5;
// let text2 = numb.toString();
// let padded3 = text.padStart(4, "0");
// console.log(padded3);

// !padEnd();

let text = "5";
let padded = text.padEnd(4, "0");
console.log(padded);

//! chaining
// *örnek asagidaki stringden clarusway alip  i CLARUSWAY olarak yazdir
// let str = "         Clarusway Full Stack"

// let str1 = str.trim()

// let str2 = str1.slice(0,9)

// let str3 = str2.toUpperCase()

// console.log(str3)

// console.log(str.trim().slice(0,9).toUpperCase())
