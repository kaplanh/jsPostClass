// ?======Sorular=====
//* 1-a adında bir değişken oluşturun, ona 2 değerini atayın.
// let a = 2;
// console.log(a);

// *2-Tek bir satırda name ve value olarak üç değişken tanımlayın:
// let ögrenciIsmi = "gümüs",
//   ögrenciNo = 1669,
//   yas = 30;
// console.log(ögrenciIsmi, ögrenciNo, yas);

//* 3-İki değişken kullanarak 3 * 10 çarpımını görüntüleyin: x ve y.

// let x = 3;
// let y = 10;
// console.log(x * y);

//* 4-myColor adlı bir değişken oluşturun, ona Red değerini atayın.
// let myColor = "red";
// console.log(myColor);

//* 5-What is the value of z?
// let x = 3;
// let y = 7;
// y = x;
// let z = x + y;

// console.log(z);

//? Dünki JavaScript Görüntüleme Olanaklarına ek olarak
// document.write()
// alert()
// console.log()

// !document.getElementById("demo").innerHTML
// *Bir HTML öğesine erişmek için JavaScript, document.getElementById(id) yöntemini kullanabilir. id niteliği, HTML öğesini tanımlar. innerHTML özelliği, HTML içeriğini tanımlar:
// document.getElementById("demo").innerHTML = 5 + 6;

// !window.print()
//* geçerli pencerenin içeriğini yazdırmak için tarayıcıda window.print() yöntemini çağırabiliriz

// document.getElementById("btn").onclick = window.print();

// ?==========    OOP   =========
// *oop icin 6.47 dk bir link
// https://youtu.be/B8meklgA3sQ

// dom(document object model-Belge Nesnesi Modeli) tree
// console.log(window);

// örnek
// *number tipinde bir veri
// let x = 1;
// console.log(x, typeof x);
// * string tipinde bir veri
// let y = 'ali';
// console.log(y, typeof y);
// *boolean tipinde bir veri
// let z = true;
// console.log(z, typeof z);

// *object tipinde bir veri
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// console.log(person, typeof person);

// *object'in property lerine atanmis degeri cagirma

// *1.yol
// console.log(person.firstName);
// *2.yol
// console.log(person1["firstName"]);

// *object'in propertysine atanmis objectin icindeki property e atanmis degeri cagirma
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   notlar: { mat: 50, html: 100, css: 90 },
// };

// console.log(person1.notlar);
// console.log(person1.notlar.mat);

// *property e atanmis degeri degistirme
// *1.yol
// console.log(person1.firstName);
// person1.firstName = "veli";
// console.log(person1.firstName);

// console.log(person1);
// *2.yol
// console.log(person1["firstName"]);
// person1["firstName"] = "ali";
// console.log(person1["firstName"]);

// console.log(person1);

// ?(Object Methods) Nesne Yöntemleri
// *Yöntemler, nesneler üzerinde gerçekleştirilebilen eylemlerdir.Yöntemler, özelliklerde işlev tanımları olarak saklanır.
// fullName	function() {return this.firstName + " " + this.lastName;}

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person);
// *object'in method'una atanmis degeri cagirma
// console.log(person.fullName());//property den farki ()
