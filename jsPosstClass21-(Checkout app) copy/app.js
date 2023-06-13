const vergiOrani = 0.18;
const kargoÜcreti = 25.99;

// ?events
const ürünlerPanelDivi = document.getElementById("product-painel");
console.log(ürünlerPanelDivi);

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
    ürünCarpiBirimFiyat(e.target.closest(".main__product-info")); 
  } else if (e.target.classList.contains("fa-trash-can")) {
    if (confirm("Silmek istediğinizden emin misiniz?")) {
      // e.target.closest(".main__product").remove();
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      araToplam();
      
    }
  }
});


const ürünCarpiBirimFiyat = (ürünPaneli) => {
  // let miktar = parseFloat(document.getElementById("quantity").textContent);
  // console.log(miktar);
  let miktar = ürünPaneli.querySelector('#quantity').innerText;
  console.log(miktar);
  let fiyat = ürünPaneli.querySelector('strong').innerText;
  console.log(fiyat);
  let miktarCarpiFiyat = ürünPaneli.querySelector(
    ".main__product-line-price");
  miktarCarpiFiyat.innerText = (miktar * fiyat).toFixed(2);
  console.log(miktarCarpiFiyat);
  araToplam()
}

const araToplam = () => {
  const miktarCarpiFiyatlarListesi = document.querySelectorAll(
    ".main__product-line-price"
  );//NodeList döndürür
  let subTotal = 0
  miktarCarpiFiyatlarListesi.forEach((item) => {
    subTotal += parseFloat(item.innerText);
  });
  const araToplamFiyat = document.querySelector(".main__sum-price");
  araToplamFiyat.innerText = subTotal.toFixed(2);
}



