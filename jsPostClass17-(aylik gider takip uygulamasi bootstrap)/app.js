// *inputlar
const gelirInput = document.getElementById("gelir-input");
const harcamaMiktariInput = document.getElementById("harcanan-miktar");
const harcamaTürüInput = document.getElementById("harcama-yeri");
const harcamaTarihiInput = document.getElementById("harcama-tarihi");

//*butonlar
const gelirBtn = document.getElementById("gelir-btn");
const kaydetBtn = document.getElementById("kaydet-btn");
const temizleBtn = document.getElementById("temizle-btn");

//*gelir-gider-kalan td ler
const gelirTd = document.getElementById("gelir-td");
const giderTd = document.getElementById("gider-td");
const kalanTd = document.getElementById("kalan-td");

// *tasiyicilar
let gelirToplam = 0;
let giderToplam = 0;
let giderlerArray = [];

let gider = {
  tarih: "",
  yer: "",
  miktar: "",
};

// *fonksiyonlar

//?gelir gider hesabindan geriye kalan
function kalan() {
  const kalan = gelirToplam - giderToplam;
  kalanTd.textContent = ":" + kalan + "€";
}

//?kaydet btn sine basildiginda bilgilerin tabloda siralanmasi icin
function bilgiSatiri(bilgi) {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML += `<tr><td>${gider.tarih}</td><td>${gider.yer}</td><td>${gider.miktar}</td><td><i class="fa-solid fa-trash-can text-danger" ></i></td></tr>
  `;
}


// Harcamaları JSON formatında kaydet
function giderKaydet() {
  const giderJSON = JSON.stringify(giderlerArray);
  localStorage.setItem("giderlerArray", giderJSON);
}
// Kaydedilmiş harcamaları tabloya yükle
function gideryükle() {
  const giderJSON = localStorage.getItem("giderlerArray");
  if (giderJSON) {
    giderlerArray = JSON.parse(giderJSON);
    giderlerArray.forEach(function (gider) {
      bilgiSatiri(gider);
      giderToplam += parseFloat(gider.miktar);
    });
    giderTd.textContent = ':'+ giderToplam + "€";
  }
}






// const harcamaForm = document.getElementById("harcama-form");

// *sayfa acildiginda geliriniz input'una focuslanma
// window.addEventListener("load", () => {
//   gelirInput.focus();
// });

// *gelir input'una girilen degeri ekle butonuna basinca geliriniz kismina yazdirma
gelirBtn.addEventListener("click", () => {
  if (!gelirInput.value) {
    gelirInput.focus();
  } else {
    gelirToplam += parseFloat(gelirInput.value);
    gelirTd.innerText = `:${gelirToplam}€`;
    gelirInput.value = "";
    kalanTd();
  }
});

//*giderkalemleri ve miktari ve tarihi
kaydetBtn.addEventListener("click", () => {
  if (
    !harcamaMiktariInput.value ||
    !harcamaTürüInput ||
    !harcamaTarihiInput.value
  ) {
    // alert("Lütfen tüm alanlari doldurun.");
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Lütfen tüm alanlari doldurun.",
    });
  } else {
    gider = {
      tarih: harcamaTürüInput.value,
      yer: harcamaTürüInput.value,
      miktar: harcamaMiktariInput.value,
    };

    giderlerArray.push(gider);
    giderToplam += parseFloat(harcamaMiktariInput.value);
    giderTd.innerText = `:${giderToplam}€`;
    kalan();
    bilgiSatiri();
    harcamaTürüInput.value = "";
    harcamaTürüInput.value = "";
    harcamaMiktariInput.value = "";

    // harcamaMiktariInput.value = "";
    // harcamaTürüInput.value = "";
    // harcamaTarihiInput.value = "";
    // giderTd.innerText = giderKalemleri;
    // giderKalemleri = [];
  }
});
