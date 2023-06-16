// TODO ----- JAVASCİPT DOM NOTLAR

//? 1- getElementById(): Belirli bir id değerine sahip bir HTML öğesini seçer.
//* HTML'deki bir öğeyi id'sine göre seçme
const element1 = document.getElementById("myElement");

//? 2- getElementsByClassName(): Belirli bir sınıf adına sahip tüm HTML öğelerini seçer.
//* HTML'deki tüm öğeleri sınıf adına göre seçme
const elements2 = document.getElementsByClassName("myClass");

//? 3- getElementsByTagName(): Belirli bir etiket adına sahip tüm HTML öğelerini seçer.
//* HTML'deki tüm öğeleri etiket adına göre seçme
const elements3 = document.getElementsByTagName("div");

//? 4- querySelector(): CSS seçicilerini kullanarak belirli bir HTML öğesini seçer.
//* CSS seçici kullanarak HTML'deki bir öğeyi seçme
const element4 = document.querySelector("#myElement");

//? 5- querySelectorAll(): CSS seçicilerini kullanarak belirli bir HTML öğesinin tüm eşleşen öğelerini seçer.
//* CSS seçici kullanarak HTML'deki tüm eşleşen öğeleri seçmeSSX
const elements5 = document.querySelectorAll(".myClass");

//? 6- createElement(): Yeni bir HTML öğesi oluşturur.
//* Yeni bir div öğesi oluşturma
const newDiv6 = document.createElement("div");

//? 7- appendChild(): Bir HTML öğesini başka bir öğenin altına ekler.
//* Yeni bir div öğesini belirli bir öğenin içine ekler
parentElement.appendChild(newDiv);

//? 8 - removeChild(): Bir HTML öğesini başka bir öğeden kaldırır.
//* Bir öğeyi belirli bir öğeden kaldırma
parentElement.removeChild(childElement);

//? 9- classList.add(): Bir HTML öğesine bir sınıf ekler.
//* Bir öğeye sınıf ekleme
element.classList.add("newClass");

//? 10- classList.remove(): Bir HTML öğesinden bir sınıfı kaldırır.
//*Z Bir öğeden sınıfı kaldırma
element.classList.remove("oldClass");

//? 11- innerHTML: Bir HTML öğesinin içeriğini değiştirir veya alır.
//* Bir öğenin içeriğini değiştirme
element.innerHTML = "Yeni içerik";

//? 12- document.createElement(element):
//* Bu metod, belirtilen element tipinde yeni bir HTML öğesi oluşturur.
const newDiv12 = document.createElement("div");
    console.log(newDiv12); // <div></div>

const newParagraph12 = document.createElement("p");
    console.log(newParagraph12); // <p></p>

//? 13- document.removeChild(element):
//* Bu metod, belirtilen bir HTML öğesini belge ağacından kaldırır.
const elementToRemove13 = document.getElementById("myElement");
document.removeChild(elementToRemove13);

//? 14- document.appendChild(element):
//* Bu metod, belirtilen bir HTML öğesini belgeye (dokümana) ekler.
const parentElement14 = document.getElementById("parent");
const childElement14 = document.getElementById("child");
parentElement14.appendChild(childElement14);

//? 15- document.replaceChild(new, old):
//* Bu metod, belirtilen yeni bir HTML öğesiyle mevcut bir HTML öğesini değiştirir.
const parentElement15 = document.getElementById("parent");
const oldChild15 = document.getElementById("oldChild");
const newChild15 = document.createElement("div");
parentElement15.replaceChild(newChild15, oldChild15);

//? 16- document.write(text):
//* Bu metod, belirtilen metni belgenin akışına yazar.
document.write("Merhaba dünya!");

//? 17- document.anchors:
//* Sayfadaki <a> (bağlantı) elementlerini içeren bir koleksiyonu temsil eder.
const anchors = document.anchors;
    console.log(anchors); // HTMLCollection of anchor elements

//? 18- document.applets
//* Bu özellik, belgedeki tüm <applet> öğelerini içeren bir HTMLCollection nesnesini döndürür.
const applets = document.applets;
    console.log(applets); // HTMLCollection of applet elements

//? 19- document.baseURI
//* Bu özellik, belgenin temel URI'sini (Uniform Resource Identifier) döndürür.
const baseURI = document.baseURI;
    console.log(baseURI); // Base URI of the document

//? 20- document.body
//* Bu özellik, belgedeki <body> öğesini temsil eden bir referansı döndürür.
const body = document.body;
    console.log(body); // Body element of the document

//? 21- document.cookie
//* Bu özellik, belgede saklanan çerezleri (cookie'leri) temsil eden bir dizeyi döndürür.
const cookies = document.cookie;
    console.log(cookies); // Value of the document's cookies

//? 22- document.doctype
//* Bu özellik, belgenin doctype (belge türü) düğümünü temsil eden bir referansı döndürür.
const doctype = document.doctype;
    console.log(doctype); // Doctype node of the document

//? 23- document.documentElement
//* Bu özellik, belgenin <html> öğesini temsil eden bir referansı döndürür.
const htmlElement = document.documentElement;
    console.log(htmlElement); // HTML element of the document

//? 24- document.documentURI
//* Bu özellik, belgenin URI'sini (Uniform Resource Identifier) döndürür.
const documentURI = document.documentURI;
    console.log(documentURI); // URI of the document

//? 25- document.domain
//* Bu özellik, belgenin etki alanını döndürür.
const domain = document.domain;
    console.log(domain); // Domain of the document

//? 26- document.forms
//* Bu özellik, belgedeki tüm <form> öğelerini içeren bir HTMLCollection nesnesini döndürür.
const forms = document.forms;
    console.log(forms); // HTMLCollection of form elements

//? 27- document.head
//* Bu özellik, belgedeki <head> öğesini temsil eden bir referansı döndürür.
const head = document.head;
    console.log(head); // Head element of the document

//? 28- document.images
//* Bu özellik, belgedeki tüm <img> öğelerini içeren bir HTMLCollection nesnesini döndürür.
const images = document.images;
    console.log(images); // HTMLCollection of img elements

//? 29- document.lastModified
//* Bu özellik, belgenin son değiştirilme tarihini döndürür.
const lastModified = document.lastModified;
    console.log(lastModified); // Last modified date of the document

//? 30- document.links
//* Bu özellik, belgedeki tüm <a> (anchor) öğelerini içeren bir HTMLCollection nesnesini döndürür.
const links = document.links;
    console.log(links); // HTMLCollection of anchor elements

//? 31- document.readyState
//* Bu özellik, belgenin hazır olma durumunu temsil eden bir dize değerini döndürür.
const readyState = document.readyState;
    console.log(readyState); // Ready state of the document

//? 32- document.referrer
//* Bu özellik, belgenin yönlendirdiği (referrer) URI'yi döndürür.
const referrer = document.referrer;
    console.log(referrer); // Referrer URI of the document

//? 33- document.scripts
//* Bu özellik, belgedeki tüm <script> öğelerini içeren bir HTMLCollection nesnesini döndürür.
const scripts = document.scripts;
    console.log(scripts); // HTMLCollection of script elements

//? 34- document.URL
//* Bu özellik, belgenin URL'sini (Uniform Resource Locator) döndürür.
const url = document.URL;
    console.log(url); // URL of the document

//? 35- abort
//* abort: Bir işlem veya olayın kullanıcı tarafından iptal edildiğini bildirir.
const img = document.querySelector("img");
img.addEventListener("abort", () => {
    console.log("Resim yüklemesi iptal edildi.");
});

//? 36- afterprint
//* afterprint: Bir belgenin yazdırılması tamamlandıktan sonra tetiklenir.
window.addEventListener("afterprint", () => {
    console.log("Yazdirma işlemi tamamlandi.");
});

//? 37- animationend
//* animationend: Bir CSS animasyonunun tamamlandığını bildirir.
const box37 = document.querySelector(".box");
box37.addEventListener("animationend", () => {
    console.log("Animasyon tamamlandi.");
});

//? 38- animationiteration
//* animationiteration: Bir CSS animasyonunun bir döngüsünün tamamlandığını bildirir.
const circle = document.querySelector(".circle");
circle.addEventListener("animationiteration", () => {
    console.log("Animasyon bir döngü tamamladi.");
});

//? 39- animationstart
//* animationstart: Bir CSS animasyonunun başladığını bildirir.
const element39 = document.querySelector(".element");
element39.addEventListener("animationstart", () => {
    console.log("Animasyon başladi.");
});

//? 40- auxclick
//* auxclick: Fare üzerindeki yardımcı düğmelerden biri tıklandığında tetiklenir.
const button40 = document.querySelector(".button");
button.addEventListener("auxclick", () => {
    console.log("Yardimci düğmeye tiklandi.");
});

//? 41- beforeinput
//* beforeinput: Bir kullanıcının bir metin girişi yapmadan önce tetiklenir.
const input41 = document.querySelector("input");
input.addEventListener("beforeinput", () => {
    console.log("Metin girişi öncesi olay tetiklendi.");
});

//? 42- blur
//* blur: Bir element odak kaybettiğinde tetiklenir.
const inputField42 = document.querySelector(".input-field");
inputField.addEventListener("blur", () => {
    console.log("Element odak kaybetti.");
});

//? 43- change
//* change: Bir input veya select elementinin değeri değiştiğinde tetiklenir.
const select = document.querySelector("select");
select.addEventListener("change", () => {
    console.log("Değer değişti.");
});

//? 44- click 
//* click: Bir elemente tıklandığında tetiklenir.
const button44 = document.querySelector(".button");
button.addEventListener("click", () => {
    console.log("Tiklandi.");
});

//? 45- contextmenu
//* contextmenu: Bir elemente sağ tıklandığında tetiklenir.
const menu = document.querySelector(".menu");
menu.addEventListener("contextmenu", () => {
    console.log("Sağ tiklandi.");
});

//? 46- copy
//* copy: Bir metnin kopyalandığında tetiklenir.
const text = document.querySelector(".text");
text.addEventListener("copy", () => {
    console.log("Metin kopyalandi.");
});

//? 47- cut
//* cut: Bir metnin kesildiğinde tetiklenir.
const input47 = document.querySelector("input");
input.addEventListener("cut", () => {
    console.log("Metin kesildi.");
});

//? 48- dblclick
//* dblclick: Bir elemente çift tıklandığında tetiklenir.
const image48 = document.querySelector("img");
image.addEventListener("dblclick", () => {
    console.log("Çift tıklandı.");
});

//? 49- drag
//* drag: Bir element sürüklenmeye başladığında tetiklenir.
const draggableElement49 = document.querySelector(".draggable");
draggableElement.addEventListener("drag", () => {
    console.log("Element sürükleniyor.");
});

//? 50- dragend
//* dragend: Bir elementin sürükleme işlemi tamamlandığında tetiklenir.
const draggableElement50 = document.querySelector(".draggable");
draggableElement.addEventListener("dragend", () => {
    console.log("Sürükleme işlemi tamamlandi.");
});

//? 51- dragenter
//* dragenter: Bir elementin sürükleme işlemiyle hedeflenen bir alana girdiğinde tetiklenir.
const dropZone51 = document.querySelector(".drop-zone");
dropZone.addEventListener("dragenter", () => {
    console.log("Sürüklenen element alanin içine girdi.");
});

//? 52- dragleave
//* dragleave: Bir elementin sürükleme işlemiyle hedeflenen bir alandan çıktığında tetiklenir.
const dropZone52 = document.querySelector(".drop-zone");
dropZone.addEventListener("dragleave", () => {
    console.log("Sürüklenen element alanin dişina çikti.");
});

//? 53- dragover
//* dragover: Bir element sürüklenirken üzerinde gezindiğinde tetiklenir.
const dropZone53 = document.querySelector(".drop-zone");
dropZone.addEventListener("dragover", () => {
    console.log("Element üzerinde geziniyor.");
});

//? 54- dragstart
//* dragstart: Bir elementin sürükleme işlemi başladığında tetiklenir.
const draggableElement = document.querySelector(".draggable");
draggableElement.addEventListener("dragstart", () => {
    console.log("Sürükleme işlemi başladı.");
});

//? 55- drop
//* drop: Bir elementin sürükleme işlemiyle hedeflenen bir alana bırakıldığında tetiklenir.
const dropZone = docume...