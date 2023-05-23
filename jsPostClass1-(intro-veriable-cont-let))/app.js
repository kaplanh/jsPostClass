//* bu bir tek satirlik yorumdur
// ?bu bir cok satirli yorumdur
// !bu bir cok satirli yorumdur
// bu bir cok satirli yorumdur
// ?=  JavaScript'te verileri "görüntülemenin" farklı yolları vardır.  ====

//! ➤ console.log()
//*Console.log() methodu, mesajları konsola kaydetmek veya yazdırmak için kullanılır. Nesneleri ve diğer bilgileri yazdırmak için de kullanılabilir.
//*ön uç programlamada en iyi arkadaşınız olacak.

// console.log("Reinvent Yourself!(Kendini yeniden keşfet!)");
// console.log("Localde bulunan script calisti")

//! ➤ document.write()
// *Document.write() fonksiyonu ile HTML belgemize bir dizi yazabiliriz.
// document.write("Reinvent Yourself!(Kendini yeniden keşfet!)");
// document.write("Reinvent Yourself!(Kendini yeniden keşfet!)");

// ! ➤ window.prompt(title, [default ])
// *Bir metin mesajı, ziyaretçi için bir giriş alanı ve window.prompt() ile Tamam/İptal düğmelerini içeren kalıcı bir pencere gösterir.
// *title  Ziyaretçiye gösterilecek metin.
//* default İsteğe bağlı ikinci bir parametre, giriş alanı için başlangıç ​​değeri.placeholder gibi
// let age = prompt("How old are you?", 100);
// console.log(age);

//! ➤ window.alert()
// *Verileri görüntülemek için, window.alert() ile bir uyarı kutusu kullanabiliriz.
// let age = prompt("How old are you?");
// alert(`you are ${age} years old!-1`);
// alert("your age-2" + age);
// alert("your age-3 " + age);
// console.log("your age-4 ", age);
// alert(`you are years old!-1`);
// alert('you are years old!-2');
// alert("you are years old!-3");
// alert("you are ${age} years old!-4");
// alert("you are ${age} years old!-5");

// backtick isareti icinde `${degisken}` pythondaki f"text {degisken} "gibi;
// alert("Bu bir alert dir") /* Alert uygulmayı bloklar (Blocking Code)*/

//! ➤ window.confirm()
// *Bir soru ve iki düğme içeren kalıcı bir pencere gösterir: pencere.confirm() ile Tamam(OK) ve İptal(Cancel).
// *OK'e basıldığında sonuç true, aksi takdirde false olur.
// confirm("Are you of legal age?");
// let isLegit = confirm("Are you of legal age?");
// alert(isLegit);
// karar = confirm("Emin misiniz E/H")
// console.log(karar)

//! ➤console.warn();
// *ekrana sari renkte bir uyari verir
// console.warn("Bu bir uyarıdir");

//! ➤console.error;
//  *ekrana kirmizi renkte bir hata mesaji verir
// console.error("Eyvah hata olustu..");

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

//? ===================  CONST  ======================
//* const ile tanimlanan degiskene baslangic degeri verilmelidir.
// const deneme; //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme)
//! caught SyntaxError: Missing initializer in const declaration (at app.js:27:7)

//* const ile tanimlanan degiskene sonradan atama yapilamaz
// const number1 = 5;
// number1 = 7;
//! Uncaught TypeError: Assignment to constant variable.
//? const ile tanimlanan degiskene sonradan atama yapilamaz

// ====const örnekleri====
// const pi = 3.14;
// console.log(pi);
// console.log(typeof pi);

// const sayi1 = "3";
// console.log(sayi1, typeof sayi1);
// sayi1 = 5;
// console.log(sayi1, typeof sayi1);

// const sayi2;
// console.log(sayi2, typeof sayi2);

// const varMi = true;
// const isOpen = false;
// const isClose = true;
// console.log(isOpen, typeof isOpen);

// ? ======================  LET  ========================
//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

// ====let örnekleri====
// let language = "java";
// console.log(language, typeof language);

// language = "Javascript";
// console.log(language);

// language = true;
// console.log(language);

// language = 3.14;
// console.log(language, typeof language);

// let adet;
// console.log(adet, typeof language); //js bir degiskenin türünü atanan degere göre belirler . eger atama olmadiysa türü undefined olarak belirlenmis olur.

// let adil;
// console.log(adil, typeof adil);

// adet = "23";
// console.log(adet, typeof adet);

// program to print the text
// variable a cannot be used here;

//? block scope örnegi
// let a = 10;
// if (a === 10) {
//   let a = 20;
// }
// console.log(a);
