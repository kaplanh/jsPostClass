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

console.log("OYUN");

let devam;
do {
  let hak = 3;
  const rasgeleSayi = console.log(rasgeleSayi); //Math.floor(Math.random() * 100 + 1);

  do {
    const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayi giriniz:"));
    hak -= 1;
    if (tahmin === rasgeleSayi) {
      console.log(`Tebrikler ${3 - hak}. denemede bildiniz.🥳`);
      break;
    } else {
      console.log(`Dikkat ${hak} hakkınız kaldı`);
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

// * ============================================
// *            Tahmin oyunu .yol
// * ============================================

// let answer;
// let i=0;
// let computer=Math.round(Math.random()*100);
// while (true){
//     while (i<7){
//         let user=+prompt("Please enter  a number between 0-100");
//         if (computer===user){
//             console.log("Mastermind")
//             break
//         } else if (user<computer){
//             console.log("Your number is lower than computer, increase your number")
//             i++
//             continue
//         } else {
//             console.log("Your number is greater than computer, decrease your number")
//             i++
//             continue
//         }
//     }
//     if (i<7) {
//         console.log("You have found secret number ")
//         answer=prompt("Do you wanna play agein 'Y' or 'N'").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }else {
//             console.log(` You have lost . computer's number ${computer}`)
//             answer=prompt("Do you wanna play agein'Y' or 'N' ").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }
