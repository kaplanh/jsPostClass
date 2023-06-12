//?selectors
const ekleFormu = document.getElementById("ekle-formu");
const gelirInput = document.getElementById("gelir-input");
const ekleBtn = document.getElementById("ekle-btn");

//?sonuc Tablosu
const gelirinizTd = document.getElementById("geliriniz");
const gideririnizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaBody = document.getElementById("harcama-body");

// ?functions
const hesaplaVeGüncelle = () => {
  gelirinizTd.textContent = gelirler;
  const totalGider = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );
  gideririnizTd.innerText = totalGider;
  kalanTd.innerText = gelirler - totalGider;
};
let gelirler = 0;

let harcamaListesi = [];

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const { id, miktar, tarih, alan } = yeniHarcama
  harcamaBody.innerHTML += `<tr>
   
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i>
  </tr>`;
};

// ?evetnts
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = Number(gelirler) + Number(gelirInput.value);
  hesaplaVeGüncelle();
  localStorage.setItem("gelirler", gelirler);
  ekleFormu.reset();
  // gelirInput.value = "";
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler"));
  tarihInput.valueAsDate = new Date();
  hesaplaVeGüncelle();
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  harcamaListesi.push(yeniHarcama);
  localStorage.setItem("harcamaListesi", JSON.stringify(harcamaListesi));
  harcamayiDomaYaz(yeniHarcama);
  hesaplaVeGüncelle();
  harcamaFormu.reset();
});
