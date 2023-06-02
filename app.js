const p = document.querySelector(".par");
console.log(p);

const ali = () => (p.style.backgroundColor = "red");

const dolar = document.querySelector(".dolar");
console.log(dolar);

const sari = () => {
  dolar.style.color = "white";
  dolar.style.fontSize='20px'
  dolar.style.fontWeight='800'
  dolar.style.fontFamily = 'Comic Sans'
};


const beyaz = () => {
    dolar.style.color = 'green'
    dolar.style.fontStyle = 'italic'


    
}


const btn = document.getElementById('btn')

const tikla = () => {
    btn.style.backgroundColor = 'blue';
    btn.style.color = 'white';
    btn.style.transform='scale(2) translate(100px,200px) '
}