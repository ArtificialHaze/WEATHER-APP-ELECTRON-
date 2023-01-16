const axios = require("axios");

const url = "[API_URL_GOES_HERE_OPENWEATHERAPI]";
const APP_KEY = "[KEY_GOES_HERE]";
const defaultCity = "Lisabon";

const btn = document.getElementById("ok");

btn.addEventListener("click", () => {
  let city = document.getElementById("city").value;
  if (city) {
    fetchData(city);
  }
});

window.onload = () => {
  fetchData(defaultCity);
};

function fetchData(city) {
  axios.get(url + city).then((res) => {
    let data = res.data;
    let title = data.weather[0].main;
    let tempVal = data.main.temp;
    let minTemp = data.main.temp_min;
    let maxTemp = data.main.temp_max;

    document.querySelector(".heading").textContent = title;
    document.querySelector(".location").textContent = city.toUpperCase();
    document.querySelector(".temp-value").textContent = tempVal;
    document.querySelector(".max-temp").textContent = maxTemp;
    document.querySelector(".min-temp").textContent = minTemp;
  });
}
