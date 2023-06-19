//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://http.cat/
// https://tr.wikipedia.org/wiki/HTTP_durum_kodlar%C4%B1

// https: console.log("FETCH");//1
// githubin 30 verilik ücretsiz veri api si   "https://api.github.com/users
// Response statu codlari
// 200 basarili
// 4xx kullanici kaynakli hata
// 404 bulunamadi
// 5xx server kaynakli hata

// fetch("https://api.github.com/users")//default u GET
//     .then((res) => {
//         console.log(res.status)
//         console.log(res.ok)
//         return res.json()
//     })
//   .then((data) => console.log(data));
//   .catch((err) => console.log(err));



// *sira örnegi

// https: console.log("FETCH");//1
// let veri = null//'' 2
// fetch("https://api.github.com/users")//default u GET
//     .then((res) => {
//         //!Error handling
//         if (!res.ok) {
//             throw new Error("Something went wrong",res.status)
//         }
//       return res.json()
//     })
//     .then((data) => console.log(data))
//     //veri=data
//     //console.log(veri)
//     .catch((err) => console.log(err));
//   console.log(data);//3

// ******************olmasi gereken********************
  console.log("FETCH");

  // let veri = "";

  fetch("https://api.github.com/users")
    .then((res) => {
      //! Error handling
      if (!res.ok) {
        throw new Error("Something went wrong", res.status);
      }
      return res.json();
    })
    .then((data) => {
      // veri = data
      // console.log(veri)
      showUsers(data);
    })
    .catch((err) => console.log(err));

  // console.log(veri)

  const showUsers = (users) => {
    console.log(users);
    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
      // console.log(user.login)
      usersDiv.innerHTML += `
        <h2>${user.login}</h2>
        <img class="w-25" src="${user.avatar_url}" alt="" />
    `;
    });
  };
