const getData = async () => {
    const URL = "https://api.github.com/users";
    try {
        const res = await fetch(URL);
        console.log(res);
        if (!res.ok) {
            throw new Error("Users can not be fetched");
        }
        const data = await res.json();
        showUsers(data);
    } catch (err) {
        console.log(err);
        renderError(err);
    }
};


const renderError = (err) => {
    const usersDiv = document.getElementById("users");
    usersDiv.innerHTML = `
    <h3>${err}</h3>
    <img src="./img/404.png" alt="404" />
  `;
};

const showUsers = (users) => {
    // console.log(users);
    const usersDiv = document.getElementById("users");

    users.forEach((user) => {
        // console.log(user.login)
        usersDiv.innerHTML += `
        <h2>${user.login}</h2>
        <img class="w-25" src="${user.avatar_url}" alt="" />
    `;
    });
};


addEventListener('load', () => {
    getData()
})