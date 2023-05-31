//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

// const car = {
//   brand: "BMW",
//   model: 2020,
//   engine: 2000,
//   colors: ["pink", "blue"],
// };

// *object okuma yöntemleri
// //? 1.Yontem (. notasyon)
// const brand = car.brand
// console.log(brand)

// //? 2.Yontem (square bracket)
// console.log(car["model"])

// //? 3. Destructure

// const { brand } = car; //? object destr.
// console.log(brand);

// const { model, engine } = car;
// console.log(model, engine);

// const { model, engine, colors } = car
// console.log(model);
// console.log(engine);
// console.log(colors[0][0]);

// const { model } = car
// console.log(model)

//* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
//   car3: ["anadol", "togg", "devrim"],
//   car4: "kağni",
// };
// const { car2 } = cars;
// const { name } = car2;
// console.log(name);

// const { model, engine } = cars.car2
// console.log(model,engine);

// let { car1, car2, car4, car3 } = cars; //? 1 seviye destr.
// console.log(car2, car4);

// const { name: c1Name, model: c1Model } = car1; //? 2 seviye dest.
// console.log(c1Name);
// const { name: c2Name, model: c2Model } = car2;
// console.log(c2Name, c2Model);

//? Alternativly
// const {
//   car1: { nameCar1, modelCar1, engineCar1 },
//   car2: { nameCar2, modelCar2, engineCar2 },
// } = cars;

// console.log(nameCar1);
// *örnek
//  const person = {
//    name: "John",
//    age: 30,
//    address: {
//      city: "New York",
//      country: { a: "USA" },
//    },
//  };

// const { name, age, address: { city, country: { a } }}=person

//   console.log(a)
//   console.log(address)//Hata verir

//   const { name, age, address: { city, country } } = person;

//   console.log(name); // John
//   console.log(age); // 30
//   console.log(city); // New York
//   console.log(country); // USA

// //* Example JSON
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Hans",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
//? KLASIK
team.forEach((t) => {
  // console.log(t);
  // console.log("NAME:", t.name);
  // console.log("SURNAME:", t.surname);
  // console.log("JOB:", t["job"]);
  // console.log("AGE:", t["age"]);
  //   console.log("**************");
});

//? DESTR.

// team.forEach((person) => {
//   const { name, surname, job, age } = person;
//   console.log("NAME:", name);
//   console.log("SURNAME:", surname);
//   console.log("JOB:", job);
//   console.log("AGE:", age);
//   console.log("**************");
// });
//!----  FUNCTIONLARDA DEATRUC. KULLANIMI ----

//? Donus degeri olarak
const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  };
};

console.log(getProduct());
let { pName, price, stock } = getProduct();
// //* function'un dondurdugu obje dogrudan dest. yapilabilir

console.log("PRODUCT NAME:", pName, "PRICE:", price);

stock = stock - 100;
console.log("REMAINING STOCK:", stock);

//? Parametre olarak
const data = {
  id: "123",
  pName: "NIKE",
  price: 300,
};
const print = function (data) {
  const { id, pName, price } = data;
  console.log(pName, price);
};

// const print = function ({ pName, price }) {
//   //? Yolda destr.
//   console.log(pName, price);
// };

print(data);

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
// const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

// //? Klasik
// const ismet = names[2];
// console.log(ismet);

// const [ahmo, , ismo, safo] = names;

// console.log(ahmo, ismo, safo);

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: Array
// const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"];

// const [araba1, araba2, araba3, ...geriKalanlar] = araclar;
// console.log(araba1);
// console.log(geriKalanlar);

//* REST: Object

// const kisi = {
//   ad: "Canan",
//   soyad: "Cano",
//   yas: 33,
//   meslek: "tester",
// };

// const { meslek, yas, ...isim } = kisi;

// console.log(meslek, yas);
// console.log(isim);
// console.log(kisi);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

// const topla = (a, b) => a + b;

// console.log("SONUC:", topla(2, 5, 10, 4));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye)
//? cevirmiş olduk.

// const toplaminiAl = (...sayilar) => {
//   console.log(sayilar);
//   return sayilar.reduce((t, v) => t + v, 0);
// };
// console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8));

//*==================================================
//*  SPREAD (...)
//* =================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

// const ucanAraclar = ["drone", "heli", "ucak"];
// const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"];

// const tasitlar = [ucanAraclar, karaAraclari];
// console.log(tasitlar);
// console.log(tasitlar[0][1]);

// const tasitlar1 = [...karaAraclari, "Kamyon", ...ucanAraclar];
// console.log(tasitlar1);

// const cumle = "Olmak ya da olmamak";

// const karakter = [...cumle];
// console.log(karakter);
// console.log(cumle);

// console.log("MAX:", Math.max(1, 3, 4, -1, 4));
// const rakamlar = [23, 45, 66, 77, 12, -1];

// //? MATH.MIN
// console.log("MIN:", Math.min(...rakamlar));

// //? Array Copy
const myNumbers = [4, 5, 6, [11, 22]];
const herNumbers = [1, 2, 3, ...myNumbers];
const hisNumbers = [...herNumbers];

console.log(herNumbers, myNumbers);
console.log(hisNumbers);

hisNumbers.push(7);
myNumbers.push(77);

console.log("MY:", myNumbers);
console.log("HER:", herNumbers);
console.log("HIS:", hisNumbers);

// myNumbers[3][1] = 44; //? spread kullanılsa dahi nested olan alanlar deep copy olmaz.

// //? Sıg Kopyalama
// const theirNumbers = hisNumbers;

// theirNumbers.push(8);
// console.log(theirNumbers, hisNumbers);

// //? Object copying

// const firstObj = { a: 1, b: 2, c: 3 };
// const secondObj = { a: 2, d: 3, c: 4 };

// const copiedFirstObj = { ...firstObj };
// console.log(copiedFirstObj);

// copiedFirstObj.a = 44;
// //? nesting olmadigi icin deep copy gibi davranir.
// console.log(copiedFirstObj, firstObj);

// const combinedObjs = { ...secondObj, ...firstObj };
// console.log(combinedObjs);

// //? nested
// const people = {
//   person1: {
//     name: "Can",
//     surname: "Canan",
//     dob: "1990",
//     job: "developer",
//     salary: "140000",
//     drivingLicense: true,
//   },
//   person2: {
//     name: "John",
//     surname: "Sweet",
//     dob: "1990",
//     job: "tester",
//     salary: "110000",
//     drivingLicense: false,
//   },
//   person3: {
//     name: "Steve",
//     surname: "Job",
//     dob: "2000",
//     job: "developer",
//     salary: "90000",
//     drivingLicense: true,
//   },
// };

// console.log("MAAAS:", people.person3.salary);

// //! FOR - IN
// //* for (key in object) {
// //*   // code block to be executed
// //* }

// for (let p in people) {
//   // console.log(p)
//   // console.log(people[p]) //? square bracket notasyon
//   console.log(people[p].salary); //? square bracket notasyon
// }

// //? Javascript'de Objeler default olarak iterable degildir.
// //? Ama for in ve for of donguleri ile itere edilebilirler.

// //? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
// //? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
// console.log(Object.keys(people));
// console.log(Object.values(people));
// console.log(Object.entries(people));

// //! FOR - OF
// //* for (x of iterable) {
// //*   code block to be executed
// //* }

// console.log("****************");
// for (let key of Object.keys(people)) {
//   console.log(key);
// }

// console.log("****************");
// //? people objesindeki tum salary 'leri yazdir
// for (let v of Object.values(people)) {
//   console.log(v.job);
//   // console.log(v["salary"]);
// }
