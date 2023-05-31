//! Object Destructuring

//? Temel Objelerde Ayıklama:

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

 
//   const { name, age, city } = person;
  
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(city); // New York

//   Bu örnekte, person nesnesinden name, age ve city özelliklerini ayıklıyoruz. Bu özelliklerin değerlerini ayrı ayrı değişkenlere atıyoruz ve daha sonra bu değişkenleri kullanarak konsola yazdırıyoruz.
  

//?Daha Farklı Değişken İsimleriyle Ayıklama:

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
  
//   const { name: personName, age: personAge, city: personCity } = person;
  
//   console.log(personName); // John
//   console.log(personAge); // 30
//   console.log(personCity); // New York
  
//   Bu örnekte, person nesnesinden özellikleri ayıklarken, ayıklanan özelliklerin değişken isimlerini değiştiriyoruz. Örneğin, name özelliğini personName olarak, age özelliğini personAge olarak ve city özelliğini personCity olarak atıyoruz.

//?Varsayılan Değerlerle Ayıklama:

// const person = {
//     name: "John",
//     age: 30
//   };
  
//   const { name, age, city = "New York" } = person;
  
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(city); // New York
  

  //Bu örnekte, person nesnesinden city özelliğini ayıklarken, eğer city özelliği person nesnesinde tanımlanmamışsa, city değişkenine varsayılan bir değer olan "New York" atanır.

  //?İç İçe Objelerde Ayıklama:

//   const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };

//   const {name, age, address:{city, country}}=person

//   console.log(country)
// //   console.log(address)//Hata verir
  

  
//   console.log(name); // John
//   console.log(age); // 30
//   console.log(city); // New York
//   console.log(country); // USA
  
 // Bu örnekte, person nesnesindeki address özelliğini ayıklarken, address içindeki city ve country özelliklerini de ayıklıyoruz. Bu şekilde, iç içe geçmiş objelerdeki özelliklere erişebiliriz. Burada address'i değişken olarak almıyor, sadece içindekkilere ulaşmak için kullanıyor. Console'a address'i yazdırmaya çalıştığımızda hata verir.

//  const {name, age, address}=person

//  console.log(person)//Personu ayılamak istediğimizde sonuç nesne olarak döner.


//!  Destructuring in Function

//? Temel Ayıklama:

const personData = { name: 'John', age: 30 };

//* A-Function Expression Yöntemi ile çözüm. Fonk. içinde ayıklayarak çözümleme

// const printPerson = function (){
//     const{name,age}=personData
//     console.log(name,age)
// }
// printPerson(personData);

// Bu örnekte, person objesini printPerson fonksiyonuna parametre olarak geçiriyoruz. Fonksiyon içinde const{ }= personData ile obje ayıklama kullanarak name ve age özelliklerini ayıklıyoruz ve konsola yazdırıyoruz.

//* B-Function Expression Yöntemi ile direkt fonk. parametresi içerisinde ayıklama;

// const printPerson= function ({ name, age }) {
//   console.log(name, age);
// }
// printPerson(personData); // John 30

//* C- Arrow Function Yöntemi ile direkt fonk. parametresi içerisinde ayıklama;

// printPerson=({name,age})=>console.log(name,age)

// printPerson(personData); // John 30

// Bu örnekte, person objesini printPerson arrow fonksiyonuna parametre olarak geçiriyoruz.  name ve age özelliklerini ayıklıyoruz ve konsola yazdırıyoruz.


//? Varsayılan Değerler:

// const person = { name: 'John'};



// function printPerson({ name, age = 25 }) {
//   console.log(name, age);
// }

// printPerson(person); // John 25

// Bu örnekte, person objesini printPerson fonksiyonuna parametre olarak geçiriyoruz. Fonksiyon içinde age özelliği için varsayılan bir değer belirliyoruz. Eğer age özelliği person objesinde tanımlanmamışsa, varsayılan değer olan 25 kullanılacak.

// Eğer obje içinde age tanımlanmış olursa varsayılan(default) değeri ezer ve obje içindeki age'in değeri yazdırılır.


//? İç İçe Ayıklama:

// const person = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  
//   function printAddress({ name, address: { city, country } }) {
//     console.log(name, city, country);
//   }
  
//   printAddress(person); // John New York USA

//   Bu örnekte, person objesini printAddress fonksiyonuna parametre olarak geçiriyoruz. Fonksiyon içinde obje ayıklama kullanarak name özelliğini direkt olarak, address objesinden de city ve country özelliklerini ayıklıyoruz.

//* Arrow Function ile çözüm

// printAddress=({name, address:{city,country}}=person)=>console.log(name,city,country)

// printAddress(person)




//? Rest Operator ile Ayıklama:

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     country: 'USA'
//   };
  
//   function printPerson({ name, age, ...rest }) {
//     console.log(name, age);
//     console.log(rest);
//   }
  
//   printPerson(person);
  // John 30
  // { city: 'New York', country: 'USA' }
  
//   Bu örnekte, person objesini printPerson fonksiyonuna parametre olarak geçiriyoruz. Fonksiyon içinde name ve age özelliklerini ayıkladıktan sonra, geri kalan özellikleri rest adlı bir obje olarak ayıklıyoruz. Bu sayede, kalan özelliklere erişebiliriz.