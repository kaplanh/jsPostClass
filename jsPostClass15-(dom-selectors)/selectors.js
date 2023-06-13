console.log("***** SELECTORS *****")

document.title = "DOM DOM 🚀"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
// document.getElementById("header").style.border = "1px solid red"

// *header'i secip bir degiskene atadik
// const myHeader = document.getElementById("header")
// console.log(myHeader)//?dogrumu sectik diye kontrol ettik

// myHeader.style.backgroundColor = "red"//?header'in background unu kirmiziya cevirdik
// myHeader.style.color = "white"

//* Add Buton'u sectik
const addButon = document.getElementById("btn")
console.log(addButon)

// addButon.style.backgroundColor = "#bebe"
// addButon.style.border = "none"
// addButon.style.borderRadius = "10px"
// addButon.style.padding = "0.6rem"

// //? Deger atama
// addButon.value = "SAVE" //?butonun ismini( value sunu) SAVE e cevirdik

// //* h1
// const h1 = document.getElementById("heading1")
// console.log(h1)

// //? Deger atama
// h1.textContent = "DOM Introduction"

// //? Deger okuma
// console.log(h1.textContent)
// console.log(h1.innerText)
// console.log(h1.innerHTML)

// //*===========================================
// //*          GETELEMENTSBYTAGNAME()
// //*===========================================

const myInputs = document.getElementsByTagName("input")
console.log(myInputs) //?HTMLCollection(4) [input#input, input#btn, input: input#input, btn: input#btn]

// //! HTML Collection (Array-Like) dondurur.
// console.log("Size:", myInputs.length)
// *1.yol
// console.log(myInputs[0])
// console.log(myInputs[1])

// console.log(document.getElementsByTagName("h3")[0])

// *2.yol
// //? indisle erişime ek olarak item() metodu ile de erisim yapilabilir.
// console.log(myInputs.item(1))

// //? Array'e cevilebilir.
// *1.yol
// const myLists = document.getElementsByTagName("li")
// const myListsArr = [...myLists] //?Array'e cevir
// console.log(myListsArr)

// myListsArr.forEach((li) => (li.style.color = "red"))

// *2.yol
// //?Alternative olarak
// const myListsArr1 = Array.from(myLists) //?Array'e cevir
// console.log(myListsArr1)
// myListsArr1.map((li) => (li.style.listStyleType = "none"))
// //*===========================================
// //*          GETELEMENTSBYCLASSNAME()
// //*===========================================
const lists = document.getElementsByClassName("list") //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
console.log(lists);

// const listsArr = [...lists]
// listsArr.forEach((li) => console.log(li))

// // lists[2].innerHTML = "Javascript language"
// lists[2].innerHTML = `<h1>Javascript</h1>`//?derleme ile tag leri olusturur ve text i yazar
// lists[3].innerText = `<h1>React</h1>`//?direkt text olarak yazar
// lists[4].textContent = `<h1>VUE</h1>`//?direkt text olarak yazar


// //* ========================================
// //*              QUERYSELECTOR()
// //* ========================================
// // ! QUery Selector ile id, tag, class seçilebilir.
// //! bu secici akısta gördügü ilk elementi secer

// //? id secildi (#)
// const header = document.querySelector("#header")
// console.log(header)

// //? class secildi (.)
// const itemLists = document.querySelector(".list")
// console.log(itemLists)

// //? h2 tag'ı secilmis oldu.
// const h2 = document.querySelector("h2")
// console.log(h2)

// //? CSS deki selector mantigi kullanabilir
// const otherH2 = document.querySelector("section h2")

// const buton = document.querySelector("section.add-item #btn")
// console.log(buton)

// const react = document.querySelector("section.item-list ul li:nth-child(4)")
// console.log(react)

// //* ========================================
// //*              QUERYSELECTORALL()
// //* ========================================

const listeler = document.querySelectorAll("ul li")
console.log(listeler);
console.log(listeler.entries()) //? NodeList(5) [li.list, li.list, li.list, li.list, li.list]

// listeler.forEach((li) => console.log(li))

// //? alternative olarak
// for (const liste of listeler.values()) {
//   console.log(liste)
// }
