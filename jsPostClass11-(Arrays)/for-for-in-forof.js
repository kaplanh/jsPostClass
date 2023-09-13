const prices = [250, 150, 300, 500];
// ! Klasik for ile yazdır
for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

console.log("***********");
// ! For in ile yazdır
for (let i in prices) {
    console.log(prices[i]);
}

console.log("***********");
// ! For of ile yazdır
for (let i of prices) {
    console.log(i);
}
console.log("***********");
// ! Foreach ile yazdır
prices.forEach((i) => console.log(i));
console.log("***********");
console.log("***********");
//////////////////////
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let toplamfor = 0;
let toplamforin = 0;
let toplamforof = 0;
// ! Klasik for ile yazdır
for (let i = 0; i < n.length; i++) {
    toplamfor += n[i];
}
console.log(toplamfor);
// ! For in ile yazdır
for (let i in n) {
    toplamforin += n[i];
}
console.log(toplamforin);
// ! For of ile yazdır
for (let i of n) {
    toplamforof += i;
}
console.log(toplamforof);
// ! Foreach ile yazdır
let sum = 0;
n.forEach((i) => (sum += i));
console.log(sum);
