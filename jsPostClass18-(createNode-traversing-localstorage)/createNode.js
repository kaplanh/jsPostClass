// *örnek-1 inputtan alinan bir veriyi ekle butonuna basildiginda tabloda tbody tag'inin altina tr lerin icinde td ler olacak sekilde satir satir sirala

// ?kullanacagim tagleri js ortamina tanittim

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");

//?butona tiklama olayi ekledim
btn.addEventListener("click", () => {
  const tr = document.createElement("tr"); //?ekle btn sine tiklaninca tr tag'olusturdum ve tr degiskenine atadim
  const td = document.createElement("td"); //?ekle btn sine tiklaninca ayni zamanda td tag'olusturdum ve td degiskenine atadim
  //! 1.yol
  tbody.appendChild(tr); //?tr leri tbody tag'inin son cocugu olarak ekledim
  // tbody.prepend(tr)//?tr leri tbody tag'inin ilk cocugu olarak ekledim
  tr.appendChild(td); //?td leri tr tag'in son cocugu olarak ekledim
  const text = document.createTextNode(input.value); //?input'un value sunu alip  bir text dügümü olusturdum ve text degiskenine atadim
  td.appendChild(text); //?text 'i td tag'in son cocugu olarak td ye ekledim
  // !2.yol
  const birinciTr = document.getElementById("birinci-tr"); //?html tarafinda olusturdugum birinci satiri js e tanittim
  // birinciTr.before(tr);//?birinci satirin üstüne-önüne yeni tr lerimi ekledim
  // birinciTr.after(tr);//?birinci satirin altina-arkasina yeni tr lerimi ekledim
});

// *örnek-2 inputtan alinan bir veriyi ekle butonuna basildiginda tbody tag'inin altina p olarak bastir

// const tbody = document.getElementById("tbody");
// const btn = document.getElementById("btn");
// const input = document.getElementById("input");

// btn.addEventListener("click", () => {
//   const par = document.createElement("p");
//   tbody.after(par);

//   const text = document.createTextNode(input.value);
//   par.appendChild(text);
// });
