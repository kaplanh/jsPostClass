//* =====================================
//*      OOP -  Polymorphism(ES6)
//*=====================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

console.log("Polymorphism")

class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }

  setPrice(price) {
    const taxRate = 1.1
    this.price = Math.trunc(price * taxRate)
  }
}
//! Book kalibinda yeni bir ornek (instance) olusturduk.
const book1 = new Book("Stupid Reseaches", "XYZ", 2022)
const book2 = new Book("Dummy Reseaches", "ABC", 2023)

//? Sub-Class tanimlamasi (Inheritance)

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
    this.month = month
  }

  //? overrided method
  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`
  }

  //? Overloading method
  //! Overloaded Metot (Parenttaki bir metodun farkli parametreler ile yeniden kullanilmasi)
  setPrice(price, taxRate = 1.2) {
    this.price = price * taxRate
  }

  //? Parenttaki bir fonksyionu yeniden cagirmak
  getSummaryParent() {
    return super.getSummary()
  }
}

book1.setPrice(100)
console.log(book1)

const mag1 = new Magazine("Elle", "Allen McElle", 2023, "June")
mag1.setPrice(50, 1.5) //? overloaded method cagrildi.
console.log(mag1)

console.log(mag1.getSummary()) //? overrided method cagrildi
console.log(mag1.getSummaryParent()) //? parent tan gelen method dolaylı yoldan cagrildi
