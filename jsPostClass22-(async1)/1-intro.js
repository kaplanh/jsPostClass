//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
// camasir makinesi ileri geri dönmesi

// *sekron'a örnek

// console.log("Hello");

// const a = () => {
//   console.log("asdsfdf");
// };

// console.log(a());

// alert("Blocked"); //?Blocking kod

// console.log(a());

// *****************************************
// const delay = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime) {}
// };

// console.log("Hello");
// // alert("Blocked") //? Blocking
// console.time("gecikme");
// delay(4000) //? blocking code - senkron
// console.timeEnd("gecikme");
// console.log("hi");

//* Asenkron (setTimeOut(),clearTimeout())
//* ------------------------------------------------
// *asekson'a ��rnek

// console.log("start");

// setTimeout(() => {
//   console.log("fetched1");
// },1000);
// * eger setTimeout'a bir bekleme süresi parametre olarak eklenmezse 0 sn olarak kabul eder ve makro bekleme kuyruguna alinacagi icin mikrolar bittikten sonra basilir

// console.log("start");

// setTimeout(() => {
//   console.log("fetched1");
// });

// console.log("End");

//* iki setTimeout fonk.varsa süresi uzun olan sonra basilir

// console.log("start");

// setTimeout(() => {
//   console.log("fetched1");
// }, 2000);

// setTimeout(() => {
//   console.log("fetched2");
// },1000);

// console.log("End");

// örnek-2
// setTimeout(() => {
//   console.log("I am fine");
//   // console.timeEnd("timer")
// }, 1000);

// setTimeout(() => {
//   console.log("Whats up?");
//   // console.timeEnd("timer")
// }, 1000);

// console.log("start");

//* iki setTimeout fonk.varsa bekleme süreleri ayniysa önce üstteki sonra alttaki basilir

// console.log("start");

// setTimeout(() => {
//   console.log("fetched1");
// }, 1000);

// setTimeout(() => {
//   console.log("fetched2");
// }, 1000);

// console.log("End");

// *console.time("gecikme"), console.timeEnd("gecikme") bir kod blogunun calisma süresini ölcmek icin

//* neted async olunca icteki setTimeOut distaki tamamlandiktan sonra kendine atanan bekleme süresinide bekeledikten sonra calisir

// console.time("timer");

// console.time("fetched1");
// console.time("fetched2");
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("Data  fetched1");
//     console.timeEnd("fetched1");
//   }, 2000);
//   console.log("Data  fetched2");
//   console.timeEnd("fetched2");
//   // console.timeEnd('timer');
// }, 1000);

// console.log("finish");

// console.time("ali");

// setTimeout(() => {
//   console.log("ali");
//   console.timeEnd("ali");
// }, 2000);
// console.timeEnd("timer");

// Timeout verilen task kuyruğun en sonuna eklenir. Timeout Değeri 0 bile olsa
//ayni anda gelen isteklere cevap vermek icin bir sira olmali
//bankalardaki fis sirasindaki gibi müsterilere sonradan bile geldigi halde öne geciyor disaridaki müsterilere göre

// *setTimeout() method örnek
// program to stop the setTimeout() method
// let count = 0;

// // function creation
// function increaseCount() {
//   count += 1;
//   console.log('hello');
// }

// let id = setTimeout(increaseCount, 4000);
// let id1 = setTimeout(increaseCount, 5000);
// let id2 = setTimeout(increaseCount, 5000);
// clearTimeout(id);
// console.log(id);
// console.log(id1);
// console.log(id2);

// console.log('setTimeout is stopped.');
// expected output: setTimeout is stopped

//?önce mikro task teki sonra makro tasktakiler bekleme sürelerine göre  yazilir önce üstteki sonra alttaki
// setTimeout(() => {
//   console.log("I am fine");
// }, 2000);

// setTimeout(() => {
//   console.log("Whats up?");
// }, 1000);
// console.log("start");

//* Asenkron (setInterval(),clearInterval())
//* ------------------------------------------------
// ?setinterval peryodik zaman araligi olusturmak icin kullanilabilir.
//?clearInterval yardimiyla sürekli devam eden interval pasif hale getirilebilir yani durdurulabilir

// let count = 0;
// const sec1 = setInterval(() => {
//   console.log(++count);
//   if (count > 9) {
//     clearInterval(sec1);
//   }
// }, 1000);

// 2.yazim sekli

// let count = 0;
// const murat = () => {
//   console.log(++count);
//   if (count > 9) {
//     clearInterval(sec1);
//     clearInterval(sec2);
//   }
// };

// const sec1 = setInterval(murat, 1000);
// const sec2 = setInterval(murat, 1000);
// console.log(sec1);
// console.log(sec2);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

// setImmediate(() => {
//   console.log('Bu, setImmediate tarafından tetiklenen bir işlevdir.');
// });

// console.log('Bu, başka bir işlevdir.');

// // Çıktı:
// // Bu, başka bir işlevdir.
// // Bu, setImmediate tarafından tetiklenen bir işlevdir.
