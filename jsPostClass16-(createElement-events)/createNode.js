console.log("**** CREATE NODE ****");

//* ------- YENI BIR ELEMENT OLUSTURMA ------

// const langInput = document.querySelector("#input")

// //? 1- olustur
const newP = document.createElement("p");
const newH2 = document.createElement('h2')

// //? 2-Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("Bu bir yeni p elementidir.");
// const text = document.createTextNode(langInput.value)
newH2.appendChild(text)
// //? 3- Olusturulan text dugumunu yeni elemente bagla (append)

// console.log(newP)
// //? 4- Yeni elementin DOM tree baglanmasi (append)

// //* main bolumun en sonuna yeni elementi ekler.
// const main = document.querySelector("main");
// main.appendChild(newP);

// //* item-list section'nın onune yeni elementi ekler.
// //! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar.
const itemListSection = document.querySelector(".item-list");
itemListSection.after(newP);
const header = document.querySelector('#header')
header.after(newH2)

// itemListSection.after(newH2);

// //* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------
// //? 1) Yontem
// newP.id = "paragraf"
// newP.className = "par center"
// newP.name = "deneme"

// //? 2) setAttribute()
// newP.setAttribute("id", "new-id")
// newP.setAttribute("class", "new-class")
// newP.setAttribute("name", "new-class")
// newP.setAttribute("type", "button")

// //? 3) classList
// newP.classList.add("bg-danger", "border")

// console.log(newP.classList.contains("new-class"))

// //* classList.contains()
// if (newP.classList.contains("border")) {
//   newP.classList.add("border-success")
// }

// //* classList.remove()
// if (newP.classList.contains("new-class")) {
//   newP.classList.remove("new-class")
// }

// //* classList.toggle()  (bir class varsa kaldirir yoksa ekler)
// newP.classList.toggle("bg-danger")

// //* ------- ID, CLASS GIBI OZELLIKLERINI OKUMA ------
// //? 1) Yontem
// console.log(newP.id)
// console.log(newP.className)

// //? 2) getAttribute()
// console.log(newP.getAttribute("type"))
// console.log(newP.getAttribute("class"))

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------
// const ul = document.querySelector("ul")

// ul.innerHTML += `
//    <li>C++</li>
//    <li>java</li>
//    <li>C</li>
//    <li>go</li>`

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------

// const newDiv = document.createElement("div")
// newDiv.id = "my-div"
// itemListSection.after(newDiv)

// newDiv.innerHTML += `
// <h2 class="par center">Languages</h2>
// <ul>
//   <li>C++</li>
//   <li>java</li>
//   <li>C</li>
//   <li>go</li>
// </ul>`
