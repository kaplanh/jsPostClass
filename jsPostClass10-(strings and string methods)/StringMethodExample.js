// //* 1. charAt(index): Belirtilen dizin konumundaki karakteri döndürür.
const str1 = "Merhaba";
console.log(str1.charAt(0)); // "M"
// //* 2. charCodeAt(index): Belirtilen dizin konumundaki karakterin Unicode değerini döndürür.
const str2 = "Merhaba";
console.log(str2.charCodeAt(0)); // 77
// //* 3. concat(str1, str2, ..., strN): Bir veya daha fazla dizeyi birleştirerek yeni bir dize oluşturur.
const str3_1 = "Merhaba";
const str3_2 = "dünya!";
const result3 = str3_1.concat(" ", str3_2);
console.log(result3); // "Merhaba dünya!"
// //* 4. endsWith(searchValue, length): Dizenin belirtilen bir değerle bitip bitmediğini kontrol eder.
const str4 = "Merhaba dünya!";
console.log(str4.endsWith("dünya!")); // true
// //* 5. includes(searchValue, startIndex): Dizenin belirli bir değeri içerip içermediğini kontrol eder.
const str5 = "Merhaba dünya!";
console.log(str5.includes("dünya")); // true
// //* 6. indexOf(searchValue, startIndex): Belirtilen değerin dizedeki ilk konumunu bulur.
const str6 = "Merhaba dünya!";
console.log(str6.indexOf("dünya")); // 8
// //* 7. lastIndexOf(searchValue, startIndex): Belirtilen değerin dizedeki son konumunu bulur.
const str7 = "Merhaba dünya!";
console.log(str7.lastIndexOf("a")); // 12
// //* 8. localeCompare(compareString): İki dizinin kültürel olarak karşılaştırmasını yapar ve sonucu döndürür.
const str8_1 = "Merhaba";
const str8_2 = "merhaba";
console.log(str8_1.localeCompare(str8_2)); // 1
// //* 9. match(regexp): Dizeyi belirtilen düzenli ifadeye göre eşleştirir.
const str9 = "Merhaba dünya!";
const regex9 = /merhaba/i;
console.log(str9.match(regex9)); // ["Merhaba"]
// //* 10. repeat(count): Dizenin belirtilen sayıda tekrarlanan kopyasını oluşturur.
const str10 = "Merhaba ";
console.log(str10.repeat(3)); // "Merhaba Merhaba Merhaba "
// //* 11. replace(searchValue, replaceValue): Belirli bir değeri içeren bölümü başka bir değerle değiştirir.
const str11 = "Merhaba dünya!";
console.log(str11.replace("dünya", "evren")); // "Merhaba evren!"
// //* 12. search(regexp): Dizenin belirtilen düzenli ifadeyi arar ve sonucu döndürür.
const str12 = "Merhaba dünya!";
console.log(str12.search(/dünya/)); // 8
// //* 13. slice(startIndex, endIndex): Belirtilen başlangıç ve bitiş konumları arasındaki bölümü alır.
const str13 = "Merhaba dünya!";
console.log(str13.slice(0, 7)); // "Merhaba"
// //* 14. split(separator, limit): Dizeyi belirtilen ayırıcıya göre bölerek bir dizi oluşturur.
const str14 = "Merhaba dünya!";
const arr14 = str14.split(" ");
console.log(arr14); // ["Merhaba", "dünya!"]
// //* 15. startsWith(searchValue, startIndex): Dizenin belirli bir değerle başlayıp başlamadığını kontrol eder.
const str15 = "Merhaba dünya!";
console.log(str15.startsWith("Merhaba")); // true
// //* 16. substr(startIndex, length): Belirtilen başlangıç konumundan itibaren belirli bir uzunluktaki bölümü alır.
const str16 = "Merhaba dünya!";
console.log(str16.substr(8, 5)); // "dünya"
// //* 17. substring(startIndex, endIndex): Belirtilen başlangıç ve bitiş konumları arasındaki bölümü alır.
const str17 = "Merhaba dünya!";
console.log(str17.substring(0, 7)); // "Merhaba"
// //* 18. toLocaleLowerCase(): Dizenin küçük harfli hâlini, yerel dil ayarlarına göre dönüştürür.
const str18 = "Merhaba Dünya!";
console.log(str18.toLocaleLowerCase()); // "merhaba dünya!"
// //* 19. toLocaleUpperCase(): Dizenin büyük harfli hâlini, yerel dil ayarlarına göre dönüştürür.
const str19 = "Merhaba Dünya!";
console.log(str19.toLocaleUpperCase()); // "MERHABA DÜNYA!"
// //* 20. toLowerCase(): Dizenin karakterlerini küçük harfe dönüştürür.
const str20 = "Merhaba Dünya!";
console.log(str20.toLowerCase()); // "merhaba dünya!"
// //* 21. toUpperCase(): Dizenin karakterlerini büyük harfe dönüştürür.
const str21 = "Merhaba Dünya!";
console.log(str21.toUpperCase()); // "MERHABA DÜNYA!"
// //* 22. toString(): Dizeyi ilgili nesnenin dize temsiline dönüştürür.
const num22 = 42;
console.log(num22.toString()); // "42"
// //* 23. trim(): Dizenin başındaki ve sonundaki boşluk karakterlerini kaldırır.
const str23 = "   Merhaba dünya!   ";
console.log(str23.trim()); // "Merhaba dünya!"
// //* 24. valueOf(): Dizenin ilgili nesnenin ilkel değerini döndürür.
const str24 = new String("Merhaba dünya!");
console.log(str24.valueOf()); // "Merhaba dünya!"
//? Örnek 1 => Stringi tersten yazdırma
const sentence = "hello world!";
const newSentece = sentence.split("").reverse().join("");
console.log(newSentece);
console.log("*************");
//? Örnek 2 => Tüm kelimelerin baş harfini büyük harfe çevirme
const sentence2 = "tüm kelimelerin bas harfini buyuge ceviren kod";
const words = sentence2.split(" ");
let newSentence2 = "";
let newSentence3 = "";
for (let i = 0; i < words.length; i++) {
    newSentence2 += words[i][0].toUpperCase() + words[i].slice(1) + " ";
}
console.log(newSentence2);
// //? Forof ile alternatif çözüm
for (let i of words) {
    newSentence3 += i[0].toUpperCase() + i.slice(1) + " ";
}
console.log(newSentence3);
//? Örnek 3 => Verilen bir cümledeki kelime sayısını bulan bir fonksiyon yazın.
const sentence3 = "kac kelime oldugunu hesaplayan fonksiyon yazalim";
function howManyWords() {
    const words = sentence3.split(" ").length;
    console.log(words);
}
howManyWords();
//? Örnek 4 => cümle içerisinde tekrarlanan kelimeleri bulma
const cumle = "bu bir örnek örnek cümle cümle cümle örnek";
const kelimeler = cumle.split(" ");
const tekrarlayanKelimeler = [];
for (let i = 0; i < kelimeler.length; i++) {
    if (
        kelimeler.indexOf(kelimeler[i]) !== i &&
        !tekrarlayanKelimeler.includes(kelimeler[i])
    ) {
        tekrarlayanKelimeler.push(kelimeler[i]);
    }
}
console.log("Tekrarlayan kelimeler:", tekrarlayanKelimeler);
//? Örnek 5 => Verilen bir cümledeki her kelimenin uzunluğunu hesaplayan ve en uzun kelimeyi ve  uzunluğunu döndüren bir fonksiyon yazın.
function find(sentence5) {
    sentence5 = "bu cumlede tekrar eden kelimeleri bulalim bu tekrar onemli";
    let words = sentence5.split(" ");
    let longestWord = "";
    let longestLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestLength) {
            longestLength = words[i].length;
            longestWord = words[i];
        }
    }
    return console.log(
        `Longest word is "${longestWord}". Longest word's lenght is ${longestLength}`
    );
}
find();
