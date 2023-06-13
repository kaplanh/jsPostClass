const vergiOrani = 0.18;
const kargoÜcreti = 25.0;

// ?events
const ürünlerPanelDivi = document.getElementById("product-painel");
console.log(ürünlerPanelDivi);

ürünlerPanelDivi.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
    } else {
      if (confirm("Silmek istediğinizden emin misiniz?")) {
        e.target.closest(".main__product").remove();
      }
    }
  } else if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent++;
  } else if (e.target.classList.contains("fa-trash-can")) {
    if (confirm("Silmek istediğinizden emin misiniz?")) {
      // e.target.closest(".main__product").remove();
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
  }
});
