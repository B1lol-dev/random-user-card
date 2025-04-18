import { formatNumber, fetchData } from "./utils.js";

fetchData("https://randomuser.me/api/").then((data) => {
  user_card.children[0].src = data.results[0].picture.large;
  user_card.children[1].innerHTML = data.results[0].name.first;
  user_card.children[2].innerHTML = data.results[0].name.last;

  const user_socials_info = user_card.querySelector(".user_social_info");

  user_socials_info.children[0].children[0].innerText = formatNumber(
    Math.ceil(Math.random() * 1000)
  );

  user_socials_info.children[1].children[0].innerText = formatNumber(
    Math.ceil(Math.random() * 1100000)
  );

  user_socials_info.children[2].children[0].innerText = formatNumber(
    Math.ceil(Math.random() * 1000)
  );
});

// user_card opening and closing event
const user_card = document.getElementById("user_card");
user_card.addEventListener("click", (e) => {
  user_card.classList.toggle("opened");
});
