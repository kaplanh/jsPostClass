const btn = document.getElementById("btn");
const card = document.querySelector(".inner-container");

btn.addEventListener("click", () => {
  getData();
});

const getData = async () => {
  try {
    const URL = "https://randomuser.me/api";
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      const data = await res.json();
      console.log(data);
      domaYaz(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const domaYaz = (data) => {
  const {
    picture: { medium },
    name: { first, last },
    location: { country },
    phone,
    email,
  } = data.results[0];
  console.log(medium);
  card.innerHTML = ` <img class="image" src="${medium}" alt="" />
            <p>
                <i class="fa-solid fa-user"></i> Name :
                <span class="name">${first} </span>
            </p>
            <p>
                <i class="fa-solid fa-user"></i> LastName :
                <span class="last-name"> ${last} </span>
            </p>
            <p>
                <i class="fa-solid fa-magnifying-glass-location"></i> Location :
                <span class="location"> ${country}</span>
            </p>
            <p>
                <i class="fa-solid fa-phone-flip"></i>Phone :
                <span class="phone"> ${phone}</span>
            </p>
            <p>
                <i class="fa-solid fa-envelope"></i>Email :
                <span class="email"> ${email}</span>
            </p>`;
};
