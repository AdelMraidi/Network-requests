const btn = document.getElementById("btn");
const temp = document.getElementById("temp");

btn.addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=210c895ddf1a750f985e1c7176b7af5e`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        temp.innerText = data.main.temp;
      } else {
        alert("city not found");
      }
    })
    .catch((err) => console.error(err));
});
