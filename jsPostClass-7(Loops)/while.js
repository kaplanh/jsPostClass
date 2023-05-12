// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");
// ##
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");

// ?10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile
// yazınız

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//! --------- WHILE -----------

//! ------  DO - WHILE -------

//! ------  FOR -------





// ========================================================================================================

// let answer;
// let i=0;
// let computer=Math.round(Math.random()*100);
// while (true){
//     while (i<7){
//         let user=+prompt("Please enter  a number between 0-100");
//         if (computer===user){
//             console.log("Mastermind")
//             break
//         } else if (user<computer){
//             console.log("Your number is lower than computer, increase your number")
//             i++
//             continue
//         } else {
//             console.log("Your number is greater than computer, decrease your number")
//             i++
//             continue
//         }
//     }
//     if (i<7) {
//         console.log("You have found secret number ")
//         answer=prompt("Do you wanna play agein 'Y' or 'N'").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }else {
//             console.log(` You have lost . computer's number ${computer}`)
//             answer=prompt("Do you wanna play agein'Y' or 'N' ").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }