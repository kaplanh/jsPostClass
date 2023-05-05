// ?======  DATA TYPE ========
// * ➤ JavaScript'te var, let ve const anahtar sözcükleri ile bir değişken bildirebiliyorduk simdi bu degiskenlerin tuttugu degerleri inceleyecegiz

// var myNumber = 3;
// // 👆 this is pre ES6 style, prefer let or const
// let num1 = 15;
// const userName = "John";

// *➤JavaScript dilindeki veri türler kümesi, primitive values(ilkel değerlerden) ve objects(nesnelerden) oluşur.
//1- primitive values
//2- objects

// !➤ Primitive Data Types:
// * 1-undefined : typeof aValue === "undefined"

// let age;
// console.log(age); // output: "undefined"
// console.log(userName); // userName is not defined

// *●2- null : typeof aValue === "object"(*)
// JavaScript'te "typeof null", "object"tir, bu da yanlışlıkla null'un bir nesne olduğunu gösterir(değil, ilkel bir değerdir).Bu bir hatadır ve ne yazık ki düzeltilemez çünkü mevcut kodu bozabilir.

// ChatGPT den
//JavaScript programlama dilinde null değeri, bir değişkenin değerinin atanmamış olduğunu veya bilinçli olarak boş bir değere sahip olduğunu belirtmek için kullanılır.

// Null, özel bir veri tipidir ve sadece null değerini taşıyabilir. Bu nedenle, null ile ilgili işlemler yaparken, null değerinin olası olduğunu dikkate almalısınız. Null değeri, özellikle bir değişkenin bilinçli olarak boş bir değere sahip olduğu durumlarda kullanılır. Örneğin, bir kullanıcının seçmediği bir seçenek için bir değişken null değerine atanabilir.

// Ayrıca, null ve undefined arasında bir fark vardır. Undefined, bir değişkenin henüz atanmamış olduğu veya atanmış olmasına rağmen değerinin tanımlanmamış olduğu durumlarda kullanılırken, null bir değişkenin var olduğu ve bilinçli olarak boş bir değere sahip olduğu durumlarda kullanılır.

//JavaScript'de null, falsy değerlerden biridir. Bu, null değerinin, bir koşullu ifade içinde veya bir değerin değerlendirilmesinde false olarak kabul edileceği anlamına gelir. Ancak, null değerinin kendisi false değildir, sadece false olarak kabul edilir.

// let age = null;

// * ● 3- Number : typeof aValue === "number"
// let x = 7;
// let pi = 3.14159;
// const x = Number.MAX_SAFE_INTEGER;
// console.log(typeof x, x);
//* ● 4- String : typeof aValue === "string"

// *● 5-Boolean : typeof aValue === "boolean"

// *● 6-BigInt : typeof aValue === "bigint"
// const x = Number.MAX_SAFE_INTEGER;
// console.log(typeof x, x);
// number 9007199254740991
// const y = BigInt(x + 1);
// console.log(typeof y, y);
// bigint 9007199254740992n

// *● 7-Symbol: typeof aValue === "symbol"

// !➤ Object Data type(Reference type) (Nesne Veri tipi(Referans tipi):
// *➤ Object Data type(Reference type) (Nesne Veri tipi(Referans tipi): typeof aValue === "nesne".
//  Functions(İşlevler) Arrays  object tipinde veri tipleridir
// key value(anahtar / değer) çiftlerini depolamak için yerleşik bir veri türüdür.Nesnelerin içindeki veriler sırasızdır ve değerler herhangi bir türde olabilir: new Object, new Array, new Map, new Set, ... new anahtar sözcüğüyle yapılan neredeyse her şey;

// *➤ Functions (İşlevler), bir dizi eylemi gerçekleştirmek üzere düzenli, yeniden kullanılabilir kod sağlamak için JavaScript'teki temel yapı taşlarından biridir. functions aynı zamanda referans türleri olarak da bilinen nesnelerdir(objects). typeof aValue === "function", functions tip denetimi için özel bir kısaltmadır, ancak her Function constructor(İşlev yapıcısı) Object constructor(Nesne yapıcısından) türetilmiştir.

// ? ===== VERI TIPINI BULMA ====
// * ➤ Bir JavaScript değişkeninin türünü bulmak için JavaScript typeof operatörünü kullanabiliriz.

//* örnekler
// let aValue;
// console.log("1. " + typeof aValue);

// aValue = null; // beware: null is a value, not a reference
// console.log("2. " + typeof aValue);

// aValue = 42;
// console.log("3. " + typeof aValue);

// aValue = "Clarusway";
// // aValue = 'Clarusway';
// // aValue = `Clarusway`;
// // 👆 3 ways to define a string
// console.log("4. " + typeof aValue);

// aValue = true;
// console.log("5. " + typeof aValue);

// aValue = 1234567890123456789012345678901234567890n;
// console.log("6. " + typeof aValue);

// aValue = Symbol("Clarusway");
// console.log("7. " + typeof aValue);

// aValue = { firstName: "John", lastName: "Doe" };
// console.log("8. " + typeof aValue);

// ?====== oBJECT LERDE VALUE LARA ULASMA VE DEGISTIRME =====

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// ?===== ULASMA ====
console.log(myCar);
// *1.yol
console.log(myCar.make);
// *2.yol
console.log(myCar[make]);

// ?==== DEGISTIRME ======
// *1.yol
myCar.make = "Tesla";
console.log(myCar);

// *2.yol
myCar[make] = "Tesla";
console.log(myCar);
