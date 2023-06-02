//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

// document.querySelector("header h1").onmouseover = function () {
//   document.querySelector("header h1").style.color = "red"
// }

//? Alternative olarak
const heading1 = document.querySelector("header h1")

heading1.onmouseover = function () {
  heading1.style.color = "red"
}

heading1.onmouseout = function () {
  heading1.style.color = "black"
}

const printHello = () => {
  document.write("Hello")
}

//? onload event'ı html ve css kodlarinini render edilmesini akabinde calisir.
window.onload = printHello()

window.addEventListener("load", () => {
  document.getElementById("input").focus()
})

const addBtn = document.querySelector("#btn")
const ul = document.createElement("ul")
document.querySelector(".item-list").before(ul)

addBtn.addEventListener("click", (e) => {
  //   console.log("Btn Clicked")
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)

  if (!input.value) {
    alert("Please enter a comment")
  } else {
    const input = document.querySelector("#input")
    const li = document.createElement("li")
    ul.appendChild(li)
    const textLi = document.createTextNode(input.value)
    li.appendChild(textLi)
    input.value = ""
    input.focus()
  }
})

//? input'un üzerinde iken bir klavye tusuna basilirsa calis
document.querySelector("#input").addEventListener("keydown", (e) => {
  //   console.log(e.code)
  //   console.log(e.keyCode)
  //? Basilan tus Enter ise
  if (e.code === "Enter") {
    addBtn.click() //? add butonun tiklanma fonksiyonu calistir.
  }
})
