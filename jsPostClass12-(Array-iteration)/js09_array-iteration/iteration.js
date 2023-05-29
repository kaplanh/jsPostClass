//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
// const prices = [250, 150, 300, 500];

// //* KLASIK FOR
// for (let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
// }
// console.log("*********");

// //* FOREACH
// prices.forEach((p) => console.log(p));

// console.log("*********");
// prices.forEach((p, i) => console.log("DEGER:", p, "INDIS:", i));
// prices.forEach((p, i, a) => console.log("DEGER:", p, "INDIS:", i, "array:", a));

// //?-------------- ÖRNEK -------------------
// //?  Dizideki toplam fiyati hesaplayalim.
// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log("SUM:", sum);

console.log("*********");
// //! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
// console.log(prices.forEach((price) => price * 2));

//* Foreach ile dongu icerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.
// prices.forEach((price) => console.log(price * 2));

// ?soru-1 Bir dizideki elemanları her birini ayrı ayrı yazdıran uygulamayı forEach metodu ile yazınız.

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// names.forEach((name) => console.log(name));
// names.forEach((name) => console.log(name.toLowerCase()));

//? soru-2 Bir dizideki elemanların toplamını FOR EACH metodu ile yazınız.

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
//   return sum;
// });

// console.log(sum);

// *2.yol
// let total = 0;
// numbers.forEach((num) => (total += num));
// console.log(total);

// ?soru -3: Belirtilen dizinin her bir elamanının 5 katını alarak ayrı bir dizide saklayan uygulamayı forEach() metodu ile yazınız.

// const dizi1 = [-5, 24, -13, 7];
// const myArray = [];
// // dizi1.forEach((x, i) => (myArray[i] = x * 5));
// dizi1.forEach((x, i) => myArray.push(x * 5));

// console.log(myArray);

// //* =======================================
// //*            MAP METHOD
// //* =======================================
// //?-------------- ÖRNEK -------------------
// //? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const upperName = names.map((name) => name.toLocaleUpperCase());
// console.log(upperName);
// console.log(names);

// //! Orjinal dizi yi modifiye etmek için 3. parametre kullanilabilir.
// names.map((name, i, arr) => {
//   arr[i] = name.toLocaleUpperCase();
// });
// console.log(names);

// //?-------------- ÖRNEK -------------------
// //? tlPrices dizisindeki rakamlarin Euro ve dolar
// //? karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const euro = 21.78;
// const dolar = 19.8;
// const tlPrices = [100, 150, 100, 50, 80];

// const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
// const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));

// console.log(dolarPrices);
// console.log(euroPrices);
// console.log(tlPrices);

// ?soru-1 Bir dizideki elemanların 5 katını alarak yeni bir diziye kaydeden uygulamayı map() metodu ile yazınız.

// const numbers = [13, 5, -20, 0, 100];
// const numbers2 = numbers.map((deger) => deger * 5);
// console.log(numbers2.sort((a, b) => a - b));

// ?soru-3tlFiyatlar dizisindeki fiyatların Euro ve dolar karşılıklarını hesaplatarak yeni dizlere kaydediniz.

// const euro = 9.68;
// const dolar = 8.1;
// const tlFiyatlar = [100, 150, 100, 50, 80];

// const dolar1 = tlFiyatlar.map((x) => +(x / dolar).toFixed(2));
// console.log(dolar1);
// const euro1 = tlFiyatlar.map((x) => +(x / euro).toFixed(2));
// console.log(dolar1);

// for (let i in tlFiyatlar) {
//   let result = tlFiyatlar.map((tl) => (tl / dolar).toFixed(2));
//   console.log(tlFiyatlar[i], +result[i]);
// }

// ?soru-4 Bir dizideki sayıları tersine çevirerek yeni bir dizi oluştururunuz yani her sayıyı tersten yazdırmamız isteniyor aynı zamanda rakamlarida tersten yazacaz

// const numbers = [123, 456, 789];
// const reverseNumbers = numbers.reverse();
// console.log(reverseNumbers);
// const result = reverseNumbers.map(
//   (number) => +number.toString().split("").reverse().join("")
// );
// console.log(result);

// //* =======================================
// //*             FILTER METHOD
// //* =======================================
// //?-------------- ÖRNEK -------------------
// //? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const biggerThan = salaries.filter((salary) => salary >= 10000);
// console.log(biggerThan);
// console.log(salaries);

// const range = salaries.filter((salary) => salary >= 8000 && salary <= 10000);
// console.log(range);

// ?soru1 İki farklı dizinin ortak elemanlarını bulan bir JavaScript programı nasıl yazılır?
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// const ortak = []
// const karsilastirma = arr1.filter((x) => {
//   if (arr2.includes(x)) {
//     // console.log(x);
//     ortak.push(x)
//   }
// })
// console.log(ortak);

// *2.yol
// const karsilastirma2 = arr1.filter(x => arr2.includes(x))
// console.log(karsilastirma2);

// *klasik for ile
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// let same = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       same.push(arr1[i]);
//     }
//   }
// }
// console.log(same);

// *filter() metodu ile
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// // let same = [];
// const result = arr1.filter((num, i) => {
//   if (arr1.includes(arr2[i])) {
//     // same.push(arr2[i]);
//     console.log(arr2[i]);
//   }
// });
// // console.log(same);

// ?soru-2 Bir dizideki kelime uzunluğu 5'ten büyük olan kelimeleri filtrelerip yazdırın
// const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];
// let besdenBüyük = words.filter((x) => x.length > 5);
// console.log(besdenBüyük);
// console.log(words.filter((x) => x.length > 5));
// console.log(words);

// const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];
// const newWords = words.filter((word) => word.length > 5);
// console.log(newWords);

// }
// //*          CHAINING (PIPELINE)
// //* =======================================
// //? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
// //? yeni diziye saklayalim.

// const biggerThan9000 = salaries
//   .filter((s) => s < 9000)
//   .map((s) => Number((s * 1.1).toFixed(2)));

// console.log(biggerThan9000);

// salaries
//   .filter((s) => s < 9000)
//   .map((s) => Number((s * 1.1).toFixed(2)))
//   .forEach((s) => console.log(s)); //? Consuming

//* =======================================
//*             REDUCE METHOD
//* =======================================
// ?maas toplami

// const toplamMayiş = mayişlar.reduce((toplam, deger) => toplam + deger, 0)

// console.log("TOPLAM MAYIŞ:", toplamMayiş)

//? ORNEK:maasi 6000 ile 10000 tl arasindaki arkadaslara %10 zam yapip bu maaşların toplamini hesaplayacagiz.

// const mayişlar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const zamliToplam = mayişlar
//   .filter((mayiş) => mayiş > 6000 && mayiş < 10000)
//   .map((mayiş) => mayiş * 1.1)
//   .reduce((toplam, mayiş) => toplam + mayiş, 0);
// console.log(zamliToplam);

// const zamliMaasToplami = mayişlar
//   .filter((m) => m >= 6000 && m <= 10000)
//   .map((m) => m * 1.1)
//   .reduce((t, m) => t + m)

// console.log("ZAMLI MAASLAR:", zamliMaasToplami)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15];
// const check = ages.every((age) => age >= 18)
// check ? console.log("All ages are over 18") : console.log("Sum are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

// const over80 = ages.some((a) => a >= 80)
// console.log(over80) //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

// const foundIndex = ages.findIndex((age) => age > 18)
// console.log(foundIndex) //? 1
