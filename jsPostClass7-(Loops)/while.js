// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");
// ##
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");

// ?10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile yazınız
// let i = 1;
// while (i <= 10) {
//   console.log("Merhaba");
//   i++;
// }

//? 1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
// let karakter;
// while (karakter != "q") {
//   console.log(karakter);
//   karakter = prompt("Lütfen baska bir karakter giriniz.").toLowerCase().trim();
// }
// console.log("q ya basarak cikis yaptiniz");

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//! --------- WHILE -----------
// let not = +prompt("Notunuz: ");
// while (not < 0 || not > 100) {
//   console.log("girdiginiz deger 0-100 arasinda olmak zorunda");
//   not = +prompt("Notunuz: ");
// }
//! ------  DO - WHILE -------
let not2;
do {
  not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
  // if (not < 0 || not > 100) {
  //   alert("Not 0'dan küçük veya 100'den büyük olamaz")
  // }
  console.log(not2);
} while (not2 < 0 || not2 > 100);

console.log("Notunuz:", not2);

//! ------  FOR -------
let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
for (; not3 < 0 || not3 > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz");
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
}

console.log("Notunuz:", not3);

// * ============================================
// *            Tahmin oyunu-1.yol
// * ============================================

console.log("OYUN BASLASIN");

let devam;
do {
  let hak = 3;
  const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
  // console.log(rasgeleSayi);

  do {
    const tahmin = Number(prompt("Lütfen 0-100 arasinda bir sayi giriniz:"));
    hak -= 1;
    if (tahmin === rasgeleSayi) {
      console.log(`Tebrikler ${3 - hak}. denemede bildiniz.🥳`);
      break;
    } else {
      console.log(`Dikkat ${hak} hakkiniz kaldi`);
      if (tahmin < rasgeleSayi) {
        console.log("ARTTIR ⬆️");
      } else {
        console.log("AZALT ⬇️");
      }
    }
  } while (hak > 0);

  if (hak === 0) {
    console.log("Üzgünüz oyunu kaybettiniz 😔");
  }

  devam = prompt("Yeniden oynamak ister misiniz e/h?");
} while (devam == "e" || devam == "E");

console.log("Yine bekleriz");
