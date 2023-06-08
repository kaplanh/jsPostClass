//*www.w3schools.com/html/html5_webstorage.asp

// !HTML Web Depolama nedir?
// ?Web depolama ile web uygulamaları, verileri kullanıcının tarayıcısında yerel olarak depolayabilir.

//? HTML5'ten önce, uygulama verilerinin her sunucu isteğinde yer alan çerezlerde saklanması gerekiyordu. Web depolaması daha güvenlidir ve büyük miktarda veri, web sitesi performansını etkilemeden yerel olarak depolanabilir.

// ?Web depolama, kaynak başınadır (etki alanı ve protokol başına). Tek bir kaynaktan gelen tüm sayfalar aynı verileri depolayabilir ve bunlara erişebilir.

// ?HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

// *window.localStorage- son kullanma tarihi olmayan verileri saklar
// *window.sessionStorage- bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur)

// !Web depolamayı kullanmadan önce localStorage ve sessionStorage için tarayıcı desteğini kontrol edin:

https: if (typeof Storage !== "undefined") {
  alert("Web Storage support..");
} else {
  alert("Sorry! No Web Storage support..");
}

// !primitive veriler icin
// ?Store(depolama)
localStorage.setItem("lastname", "Smith");
sessionStorage.setItem("lastname", "Smith");

//? geri alma,cagirma(Retrieve)
localStorage.getItem("lastname");
sessionStorage.getItem("lastname");

//!nonprimitive veriler icin
const myObject = [{ variable1: "value1" }, { variable2: "value2" }];

// ?Store(depolama)
localStorage.setItem("myObjet", JSON.stringify(myObject)); //myObject key 'i ile myObject array'imi localStorage attim
sessionStorage.setItem("myObject", JSON.stringify(myObject));

//? geri alma,cagirma(Retrieve)
const localdenCagrilanObject = JSON.parse(localStorage.getItem("myObject")); //!localstorage deki array'imi localdenCagrilanObject degiskenime aktardim
const sessiondanCagrilanObject = JSON.parse(
  sessionlStorage.getItem("myObject")
); //!sessionstorage deki array'imi sessiondanCagrilanObject degiskenime aktardim

// *örnek

// !primitive veriler icin
const veri1 = "veli";

// *string,number gibi primitive verileri local-sessionStorage 'e gönderirken '
localStorage.setItem("veri1", veri1);
sessionStorage.setItem("veri1", veri1);

// *string,number gibi primitive verileri local-sessionStorage den cagiri '
let veri = localStorage.getItem("veri1");//?eger veri1 number bir degerse o zaman string olarak gelen degeri number yapmamiz lazim Number(localStorage.getItem("veri1"))
let veri2 = sessionStorage.getItem("veri1"); //?eger veri1 number bir degerse o zaman string olarak gelen degeri number yapmamiz lazim Number(sessionStorage.getItem("veri1"))
// console.log(veri);
// console.log(veri + ' ali');

// !nonprimitive veriler icin
const veriObject = [{ veri1: "veli" }, { veri2: "ali" }];

// *object,array gibi nonprimitive verileri localStorage 'e gönderirken '
localStorage.setItem("veriObject", JSON.stringify(veriObject));

// *object,array gibi nonprimitive verileri localStorage den cagirirken '
const cagrilan = JSON.parse(localStorage.getItem("veriObject"));

//*JSON formatindaki bir objenin veri1 key'inin tuttugu degere ulasma
console.log(cagrilan[0].veri1);
