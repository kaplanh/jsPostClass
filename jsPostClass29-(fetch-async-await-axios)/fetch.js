fetch("https://api.github.com/users")
    .then((res) => {
    if (!res.ok) {
        throw new Error("Something went wrong", res.status);
    } else {
        return res.json()
    }
    })
    .then((data) => {
    showUsers(data)
    })
    .catch((err) => {
        // console.log(err);
        const userDiv = document.getElementById('users')
        userDiv.innerHTML=`<h2 class="text-warning">${err}</h2>`
    })

const showUsers = (users) => {
  console.log(users)
  const usersDiv = document.getElementById("users")

  users.forEach((user) => {
    // console.log(user.login)
    usersDiv.innerHTML += `
        <h2>${user.login}</h2>
        <img class="w-25" src="${user.avatar_url}" alt="" />
    `
  })
}