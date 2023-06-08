//*===========================================
//*            TRAVERSING DOM
//*===========================================
// ? Bir HTML elementi uzerinden baska elementleri secmeye
// ? DOM traversing denilir. Ozellikle dinamik olarak degisen
// ? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
// ? gerekli olabilir.

// ? Secme islemi 3 yonlu yapilabilir.
// ? - Yukari yonde (Parent)
// ? - Asagi yonde (children)
// ? - Yatay yonde (Sibling)

//*ulastigimiz element
const ul = document.querySelector("#ul");

//*ul nin altindakilere ulasmak icin
//?bütün cocuklari icin
const list = ul.children;

//ulastigimiz tüm cocuklarin style da bir özellik vermek istiyorsak

const myList = [...list];
myList.forEach((item) => (item.style.color = "red"));
//ulastigimiz  cocuklardan sadece ilk elementin style da bir özellik vermek istiyorsak

list[0].style.color = "red";

// ?birinci cocuga ulasmak icin
const first = ul.firstElementChild;

//ulastigimiz cocugun verisini almak icin
console.log(first.innerText);
console.log(first.textContent);

// ?sonuncu cocuk icin
const last = ul.lastElementChild;

//ulastigimiz cocugun verisini almak icin
console.log(last.innerText);
console.log(last.textContent);

//*ul nin kardeslerine ulasma
//? önündeki kardese ulasma
const öndekiKardesElement = ul.previousElementSibling;
console.log(öndekiKardesElement);
//birinci cocugun property sine ulasma
console.log(öndekiKardesElement.id);
//? sonrasindaki kardese ulasma
const arkasindakiKardesElement = ul.nextElementSibling;
console.log(arkasindakiKardesElement);
//sonuncu cocugun property sine ulasma
console.log(arkasindakiKardesElement.className);

//* ul'nin parent larina ulasmak icin

1 - ul.parentElement;
2 - ul.parentNode;
3 - ul.closest("section"); //!ul nin parentler'i arasindaki ilk section i sec demektir
ul.closest("body").querySelector("header h1").innerText; //!ul'nin ilk body parent'ina git ve ordan header in altindaki h1 sec ve h1'in innertext ni sec

//?parent 'ina ulasma
const parentBaba = ul.parentElement;
console.log(parentBaba);
// 2.yol
const parentBaba2 = ul.parentNode.parentNode.parentNode.parentNode.parentNode;
console.log(parentBaba2);

// ?parent'inin parent'ina ulasma
const parentDede = ul.parentElement.parentElement;
console.log(parentDede);

//! parentNode ve parentElement arasindaki fark
const parentNodeIle = ul.parentNode.parentNode.parentNode.parentNode;
console.log(parentNodeIle); //!window dan sonra null olur
const ParentElementIle = ul.parentElement.parentElement.parentElement;
console.log(ParentElementIle); //!html den sonra null olur
