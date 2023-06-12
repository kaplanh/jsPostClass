//?Selectors
const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

let tasks = []

btn.addEventListener("click", () => { 
    if (!input.value) {
        alert("Please enter your todo...");
    } else {
        const task = {
            id:new Date().getTime(),//Date.now()
            text:input.value,
            flag:false,
            
        }
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify
            (tasks))
        // localStorage.clear();
        // domaYaz()
        input.value = "";
        // input.focus();

        
    }
    console.log(tasks);
})