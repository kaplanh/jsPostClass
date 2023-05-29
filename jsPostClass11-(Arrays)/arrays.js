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

// let arr1 = [1, 2, "Three", false];

// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2); // ?nedenini anlamak icin yandaki Stack - Heap fotosuna bak

// arr1[0] = 0;

// console.log(arr1);
// console.log(arr2);

// const c = ["2"];
// console.log(c);

// console.log(Boolean(c));

// const d = ["2"];
// console.log(c == d); //false çünkü adresleri farklı

// console.log(arr1 == arr2); // true çünkü adresler aynı

// arr1 = ["four"]; //let ile tanımlandığı için onaylanır

// arr2 = ["four"]; // const ile tanımlandığı için onay verilmez

//!Array metodları

// ?slice()
//* 1 - yeni bir array olusturur
//* 2-orjinali degistirmez

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// const cls = colors.slice(); //* orjinal array in içeriğini kopyalar

// console.log(colors);
// console.log(cls);

// colors[0] = "Black";

// console.log(colors);
// console.log(cls);

// console.log(colors.slice(2, 4));
// console.log(colors.slice(-2));
// console.log(colors.slice(2));
// console.log(colors.slice(8));
// console.log(colors.slice(8, 10));
// console.log(colors.slice(-10, -1));
// console.log(colors.slice(-2, 1));
// console.log(colors.slice(colors.length - 2, 1));
// console.log(colors.slice(-1, -4));
// console.log(colors.slice(-3, -1));

//?Push ()

// const colors = ["Red", "Green"];
// console.log(colors.length);

// let c = "White";

// const d = colors.push("Blue", 2023, c);
// console.log(d);

// console.log(colors);

// const e = colors.push("ali", 2000, "veli");

// // console.log(colors.push("ali", 2000, "veli"));
// console.log(e);
// console.log(colors);
// // colors.push(2023);

// console.log(colors.push(2023));
// console.log(colors);

// console.log(colors.length);

// console.log(d + " d");

// const car = ["Audi", "BMW"];

// const car2 = ["Ford", "Tesla", "Mercedes"];

// car.push(car2);//*array in tamamını tek bir eleman olarak gönderir
// console.log(car);

// // car.push(...car2);
// // console.log(car);//*diğer arrayin her elemanını ayrı ayrı dahil eder.

// console.log(car[2][2][0]);
// console.log(car[2][2][car[2][2].length - 1]);

//?pop

// const car = ["Audi", "BMW"];

// console.log(car.pop());
// console.log(car);

// const silinen = car.pop();
// console.log(silinen);
// console.log(car);

// console.log(car.pop());

//?unshift

// const colors = ["Green", "Blue"];

// console.log(colors.unshift("Red"));
// console.log(colors);

// const car = ["Audi", "BMW"];
// const car2 = ["Ford", "Tesla", "Mercedes"];

// // console.log(car.unshift(car2));
// // console.log(car);

// console.log(car.unshift(...car2));

// console.log(car);

//?shift

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// console.log(colors.shift()); //İlk elemanı siler, sildiği değeri döndürür.

// console.log(colors);

//?splice

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// Eleman silme
// console.log(colors.splice(2, 1));
// const a = colors.splice(2, 1);
// console.log(a);
// console.log(colors.splice(2, 2));
// console.log(colors.splice(2));

// console.log(colors);

// Eleman ekleme

// console.log(colors.splice(2, 0, "White"));
// console.log(colors);

// console.log(colors.splice(2, 1, "White"));
// console.log(colors);

//Eleman değiştirme

// console.log(colors.splice(3, 1, "Pink"));
// console.log(colors.splice(3, 2, "Pink", "Black"));

// console.log(colors);

//?concat

// let color1 = ["red", "green"];
// const color2 = ["blue", "orange"];
// const color3 = [10, true];

// const joinedArray = color1.concat(color2, color3);
// console.log(color1);
// console.log(joinedArray);

// const destr = color1.push(...color2, ...color3);
// console.log(color1);
// console.log(destr);

// color1 = color1.concat("Black", color2, 2);
// console.log(color1);

// console.log(joinedArray);
// const destr = color1.push(...color2, ...color3);
// console.log(color1);

// color1 = color1.concat("Black", color2, 2);
// console.log(color1);

//?indexof & lastindexof
// const colors = ["Red", "Green", "Blue", "Brown", "Green"];
// console.log(colors.indexOf("Green")); //1
// console.log(colors.indexOf("Green", 3)); //4
// console.log(colors.indexOf("green")); //-1 bulamazsa

//?lastindexof
// console.log(colors.lastIndexOf("Green")); //4
// console.log(colors.lastIndexOf("Green", -2)); //1
// console.log(colors.lastIndexOf("Green", 3)); //1
// console.log(colors.lastIndexOf("green")); //-1

// console.log(colors[colors.indexOf("Green")]);

//?reverse
// const colors = ["Red", "Green", "Blue", "Green", "Brown", "yellow"];
// colors.reverse(); //*orjinal array i değiştirir.
// console.log(colors);

//?join

// const arr = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];

// console.log(arr.join()); // C,l,a,r,u,s,w,a,y

// console.log(arr.join("")); // Clarusway

// console.log(arr.join("-")); // C-l-a-r-u-s-w-a-y
// console.log(arr);

//* orjinal array bozulmaz. Array'i stringe çevirir

//?sort

const arr = [0, 55, 5, 22, 2, 11, 1, 111];
// arr.sort();
// console.log(arr);[1, 11, 111, 2, 22, 5, 55];

// *ascending sorting(artan siralama-kücükten büyüge dogru)
arr.sort((a, b) => (a = b));
console.log(arr); // [ 1, 2, 5, 11, 22, 55, 111 ]

// *descending sorting(azalan siralama-büyükten kücüge dogru)
// arr.sort((a, b) => b - a); //numeritik olarak sıralar
// console.log(arr); // [ 111, 55, 22, 11, 5,  2,  1 ]

//?includes
// const arr = ["red", "blue", "Purple", "white", "orange"];

// console.log(arr.includes("blue")); // true

// console.log(arr.includes("Blue")); // false

// console.log(arr.includes("blue", 1)); // true 1.index ten itibaren blue var mi?
// console.log(arr.includes("blue", 2)); // false

//?Nested Arrays

// const arr = [1, true, [6, 7, 8], [3, "Red", 5]];
// arr.sort();
// console.log(arr); //[1, [3, "Red", 5], [6, 7, 8], true]
// arr[2].splice(1, 1, "yellow");
// console.log(arr); //[1, [3, "Red", 5], [6, 'yellow', 8], true]
// console.log(arr.length);

// console.log(arr[0]); // 1

// console.log(arr[2]); //[6, 'yellow', 8]
// console.log(arr[3]); // true

// console.log(arr[1][0]); // 3
// console.log(arr[1][1]); // Red
// console.log(arr[1][2]); // 5

// console.log(arr[2][2]); //8

//?ek bilgi

// const arr = ["Red", "Green", , , , , "Blue"];

// console.log(arr);
// console.log(arr[2]);

// ?.toString()
// array den bir string'e cevirir
// const arr = [1, true, [6, 7, 8], [3, "Red", 5]];
// console.log(arr.toString()); //1,true,6,7,8,3,Red,5
// // yada
// const a = arr.toString();
// console.log(a.toUpperCase());

//?at()

// const arr = [1, true, [6, 7, 8], [3, "Red", 5]];
// console.log(arr.at(1)); //1,true,6,7,8,3,Red,5
// // yada
// const a = arr.at(-1);
// console.log(a);

//?delete
// *Dizi öğeleri, JavaScript operatörü silme kullanılarak silinebilir. Silme kullanılması, dizide tanımsız delikler bırakır. Bunun yerine pop() veya shift() kullanın.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits); //[empty, 'Orange', 'Apple', 'Mango']
// console.log(fruits[0]); //undefined

//?flat()
// Bir diziyi düzleştirme, bir dizinin boyutsallığını azaltma işlemidir.
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// console.log(newArr); //[1, 2, 3, 4, 5, 6]
// console.log(myArr);

//! ===================================== DESCRIPTION ==============================
// .shift() → Dizinin ilk ogesini kaldırır.Orjinal diziyi degistirir. cikti olarak kaldirdigi elemani verir.
// .pop() → Dizinin son ogesini kaldırır.Orjinal diziyi degistirir.cikti olarak kaldirdigi elemani verir.
// .unshift() → Dizinin basına yeni degerler eklemek için kullanılır.Orjinal diziyi degistirir.orjinal dizinin son eleman sayiyini cikti verir
// .push() → Dizinin sonuna eleman eklemek için kullanılır.Orjinal diziyi degistirir.orjinal dizinin son eleman sayiyini cikti verir
// .slice() → Kendisine parametre olarak verilen dizi aralıgında bulunan degerleri kopyalar ve yeni bir dizi olusturarak geri döndürür.Orjinal diziyi degistirmez.yeni bir array cikti verir
// .splice() → Diziden elemanları kaldırır, degistirir veya çıkan elemanın yerine eleman ekler.Orjinal diziyi degistirir.kaldirilan elemanlari cikti olarak verir.kaldirilan eleman yoksa [] bos array cikti verir
// .concat() → İki veya daha fazla diziyi yeni bir dizide birlestirir.Orjinal diziyi degistirmez.bir degiskene atanarak yeni bir dizi cikti verir
// .includes() → Dizinin ogeyi içerip içermedigini kontrol eder. Boolean deger döner.
// .indexOf() → Dizinin ogeyi içerip içermedigini kontrol eder. İndex numarasını döner. Bulamazsa -1 döner.
// .lastIndexOf() → Dizinin ogeyi içerip içermedigini kontrol eder ve sondan baslar. İndex numarasını döner.
// .reverse() → Diziyi tersine çevirir. İlk index sonuncu, sonuncu index ise ilk index olur.Orjinal diziyi degistirir.
// .join() → Virgülle veya birtilen herhangi bir ayraçla ayrılmıs dizi ogelerinden olusan yeni bir string döndürür.Orjinal diziyi degistirmez.
// .sort() → Bir dizinin ogelerini artan UTF-16 düzeninde sıralar.Orjinal diziyi degistirir.kücükten büyüge dogru siralamak icin .sort((a,b)=>a-b) seklinde,büyükten kücüge dogru siralamak icin .sort((a,b)=>b-ab) seklinde kullanilir
// .toString() → Diziyi string'e oldugu gibi dönüstürür.Orjinal diziyi degistirmez.
// .at() → bastan elemanlara ulasmak istiyorsak pozitif deger sondan elemanlara ulasmak istiyorsak negatif deger veriyoruz.ES2022 ile geldi.
//delete Dizi öğeleri, JavaScript operatörü silme kullanılarak silinebilir. Silme kullanılması, dizide tanımsız delikler bırakır. Bunun yerine pop() veya shift() kullanın. .orjinal array i degistirir
// .flat()Bir diziyi düzleştirme, bir dizinin boyutsallığını azaltma işlemidir.flat() yöntemi, belirli bir derinliğe birleştirilmiş alt dizi öğeleriyle yeni bir dizi oluşturur.orjinal array i degistirmez
