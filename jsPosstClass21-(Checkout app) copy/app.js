// ?events
const ürünlerPanelDivi = document.getElementById("product-painel");
console.log(ürünlerPanelDivi);

//?Daha az event yazmak icin ve traversing yöntemlerini kullanarak islem yapabilmek icin tüm '-','+' ve cöp kutusunu kapsayan en yakin ortak parent'a tek event verdim
ürünlerPanelDivi.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      ürünCarpiBirimFiyat(e.target.closest(".main__product-info"));
    } else {
      if (confirm("Silmek istediğinizden emin misiniz?")) {
        e.target.closest(".main__product").remove();
        araToplam();
      }
    }
  } else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent++;
    ürünCarpiBirimFiyat(e.target.closest(".main__product-info")); //?argüman olarak tiklanan yere class'i 'main__product-info' olan en yakin parent(div dom objesi)
  } else if (e.target.classList.contains("fa-trash-can")) {
    if (confirm("Silmek istediğinizden emin misiniz?")) {
      // e.target.closest(".main__product").remove();
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      araToplam();
    }
  }
});

//?ürün adedine bagli olarak ortaya cikan fiyatlari bulma
const ürünCarpiBirimFiyat = (ürünPaneli) => {
  //?parametre olarak bir dom objesi verdik
  // console.log(miktar);
  let miktar = ürünPaneli.querySelector("#quantity").innerText;
  console.log(miktar);
  let fiyat = ürünPaneli.querySelector("strong").innerText;
  // console.log(fiyat);
  let miktarCarpiFiyat = ürünPaneli.querySelector(".main__product-line-price");
  miktarCarpiFiyat.innerText = (miktar * fiyat).toFixed(2);
  console.log(miktarCarpiFiyat);
  araToplam();
};

const araToplam = () => {
  //?ürün adedine bagli olarak ortaya cikan fiyatlardan ara toplami(vergi ve kargo eklenmemis) bulma islemleri
  const miktarCarpiFiyatlarListesi = document.querySelectorAll(
    ".main__product-line-price"
  ); //NodeList döndürür
  console.log(miktarCarpiFiyatlarListesi); //?NodeList(3) [div.main__product-line-price.dollar, div.main__product-line-price.dollar, div.main__product-line-price.dollar]
  let subTotal = 0; //?secilen ürünlerin vergi ve kargo ücreti eklenmemis tutari
  miktarCarpiFiyatlarListesi.forEach((item) => {
    // console.log(item.innerText);//1474.99 185.99 89.99
    subTotal += parseFloat(item.innerText);
  });

  //?kargo ve vergi ekleme islemleri
  const vergiOrani = 0.18;
  const kargoÜcreti = 25.99;

  const araToplamFiyat = document.querySelector(".main__sum-price");
  araToplamFiyat.innerText = subTotal.toFixed(2);

  const shipping = document.querySelector(".card-shipping");
  if (araToplamFiyat.innerText > 3000 || araToplamFiyat.innerText <= 0) {
    shipping.innerText = 0;
  } else {
    shipping.innerText = 25.99;
  }

  const tax = document.querySelector(".card-tax");
  tax.innerText = (araToplamFiyat.innerText * vergiOrani).toFixed(2);

  //?kargo ve vergi eklenmis en son fiyat

  const genelToplam = document.querySelector(".total");
  genelToplam.innerText = (
    parseFloat(araToplamFiyat.innerText) +
    parseFloat(shipping.innerText) +
    parseFloat(tax.innerText)
  ).toFixed(2);

  // if (subTotal <= 0 || subTotal >= 3000) {
  //   kargo = 0;
  // } else {
  //   kargo = 25;
  // }
  // const vergi = subTotal * vergiOrani;
  // console.log(vergi);
  // const genelToplam = subTotal + vergi + kargo;
  // console.log(genelToplam);
};
