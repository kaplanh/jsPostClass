console.log("**** CREATE NODE ****");

//* ------- YENI BIR ELEMENT OLUSTURMA ------

// const langInput = document.querySelector("#input")

// //? 1- olustur
const newP = document.createElement("p");

// //? 2-Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("Bu bir yeni p elementidir.");
// const text = document.createTextNode(langInput.value)
newP.appendChild(text);
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

// itemListSection.after(newH2);

// *örnekler
// ?örnek-1
const newLi = document.createElement("li");
const isim = document.createTextNode("Murat");

newLi.appendChild(isim);
const ul = document.querySelector("#ali li:nth-child(3)");
ul.before(newLi);

// ?örnek-2
const span1 = document.createElement("span");
const text2 = document.createTextNode(": Sen mi büyüksün ben mi?asd");
span1.appendChild(text2);
const ul1 = document.querySelector("#ali li:nth-child(5)");
ul1.appendChild(text2);

// //* ------- ID, CLASS GIBI OZELLIKLERI ATAMA ------
// //? 1) Yontem
newP.id = "paragraf";
newP.className = "par center";
newP.name = "deneme";

// //? 2) setAttribute()
// newP.setAttribute("id", "new-id");
// newP.setAttribute("class", "new-class");
// newP.setAttribute("name", "new-class");
// newP.setAttribute("type", "button");

// //? 3) classList
newP.classList.add("bg-danger", "border");

console.log(newP.classList.contains("new-class"));

// //* classList.contains()
if (newP.classList.contains("border")) {
  newP.classList.add("border-success");
}

// //* classList.remove()
if (newP.classList.contains("new-class")) {
  newP.classList.remove("new-class");
}

// //* classList.toggle()  (bir class varsa kaldirir yoksa ekler)
newP.classList.toggle("bg-danger");

if (newP.classList.toggle("ali")) {
}

// //* ------- ID, CLASS GIBI OZELLIKLERINI OKUMA ------
// //? 1) Yontem
console.log(newP.id)
console.log(newP.className)

// //? 2) getAttribute()
console.log(newP.getAttribute("type"))
console.log(newP.getAttribute("class"))

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------
const ul2 = document.querySelector("ul")

ul.innerHTML += `
   <li>C++</li>
   <li>java</li>
   <li>C</li>
   <li>go</li>`

// //* ------- YENI BIR ELEMENT OLUSTURMA (INNERHTML)------

const newDiv = document.createElement("div")
newDiv.id = "my-div"
itemListSection.after(newDiv)

newDiv.innerHTML += `
<h2 class="par center">Languages</h2>
<ul>
  <li>C++</li>
  <li>java</li>
  <li>C</li>
  <li>go</li>
</ul>`


// *Not:innertext,textContent arasindaki fark nedir https://www.mehsatek.com/javascript-html-dom-innertext-ve-textcontent-kullanimi/#:~:text=1%20%E2%80%93%20innerText%2C,fark%C4%B1%20bir%20%C3%B6rnek%20%C3%BCzerinde%20inceleyelim

// 1- innerText, <script> ve <style> öğeleri hariç tüm Html öğelerinin metin içeriğini döndürürken textContent tüm Html öğelerinin metin içeriğini döndürür.
// 2 - innerText, Css ile gizlenen Html öğelerinin metnini döndürmez fakat textContent döndürür.
// 3 - innerText, Html öğesinin içerisinden alacağımız metinde bulunan boşlukları göz ardı ederken textContent alacağımız metni bu boşluklar ile birlikte alır.