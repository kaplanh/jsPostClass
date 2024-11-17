do {
    const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
    let hak = 3;
    do {
        let tahmin = parseInt(prompt("Bir sayı girin:"));
        hak--;

        if (tahmin == rasgeleSayi) {
            console.log(`tebrikler ${3 - hak}. hakkinizda bildiniz `);
        } else {
            if (tahmin > rasgeleSayi) {
                console.log(` ${3 - hak}. hakkiniz kaldi `);
                console.log("Daha küçük bir sayı girin");
            } else {
                console.log(` ${3 - hak}. hakkiniz kaldi `);
                console.log("Daha büyük bir sayı girin");
            }
        }
    } while (hak > 0);
    if (hak == 0) {
        console.log("uzgünüz kaybettiniz");
    }
    devam = prompt("tekrar oynamak isterminiz", "e/E").toLowerCase().trim();
} while (devam == "e");
console.log("Yine bekleriz");
