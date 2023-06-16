//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
  const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"

  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

  try {
    const res = await fetch(URL)
    console.log(res)
    //?Error handling
    if (!res.ok) {
      throw new Error("News can not be fetched")
    }
    const data = await res.json()
    renderNews(data.articles)
  } catch (err) {
    console.log(error)
    renderError(err)
  }
}

const renderError = (err) => {
  const newsDiv = document.getElementById("news")
  newsDiv.innerHTML = `
    <h3>${err}</h3>
    <img src="./img/404.png" alt="404" />
  `
}

const renderNews = (news) => {
  const newsDiv = document.getElementById("news")

  news.map((item) => {
    const { title, content, url, urlToImage } = item //? destructure
    newsDiv.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content}</p>
                <a href="${url}" target="_blank" class="btn btn-danger">Go Detail</a>
            </div>
        </div>
    </div>
   
    `
  })
}

window.addEventListener("load", () => {
  getNews()
})
