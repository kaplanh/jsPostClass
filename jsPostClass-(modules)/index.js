console.log("JS Modules is running")

console.log(window)

//? Module kullanıminda this objesi window nesnesini gostermez
console.log(this) //? undefined

//? named export (import)
import { CALISMA_SAATI, maas } from "./mymodule.js"
// import { arttir , azalt } from "./mymodule.js"
import mesajVer, { arttir as inc, azalt as dec } from "./mymodule.js"

//? export default (Süslü kullanilmaz)
// import selamVer from "./mymodule.js"
// import mesajVer from "./mymodule.js"

//? Bazen farkli modullerden ayni elemanlari import etmemiz gerekebilir. Bunun için as ile isim değişikliği yapmak mantıklı olacaktir.
// import { Button } from "react-boostrap"
// import { Button as TailwindBtn } from "tailwind"

console.log(CALISMA_SAATI)
console.log(maas)

// console.log(arttir(5))
// console.log(azalt(5))

console.log(inc(5))
console.log(dec(5))

// selamVer()
mesajVer()
