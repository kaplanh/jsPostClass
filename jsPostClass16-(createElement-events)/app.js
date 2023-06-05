// ?ekleme islemi

const addBtn = document.querySelector(".btn-primary");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const delBtn = document.querySelector(".btn-danger");

addBtn.addEventListener("click", (e) => {
  if (!input.value) {
    input.focus();
  } else {
    ul.innerHTML += `<li>${vowels(input.value)}</li>`;
    input.value = "";
    input.focus();
  }
});


delBtn.addEventListener("click", (e) => {
  if (!ul.lastChild) {
    input.focus();
    alert("silinecek öge yok");
  } else {
    ul.lastChild.remove();
  }
});


input.addEventListener("keydown", (e) => { 
  switch (e.key) {
    case "Enter":
      addBtn.click();
      break
    case "Delete":
      delBtn.click();
      break
  }
})

function vowels(sentence) {
  let count = 0;
  const sesliHarfler = ["a", "e", "i", "o", "ö", "u", "ü"];
  for (let i of sentence.split("")) {
    if (sesliHarfler.includes(i)) {
      count += 1;
    } else {
      count = count;
    }
  }
  return `There are ${count} vowels in ${sentence}`;
}