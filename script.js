document.addEventListener("DOMContentLoaded", function () {
  const cityName = document.getElementById("cityName");
  const temp = document.getElementById("temp");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const wind_speed = document.getElementById("wind_speed");
  const wind_degrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const submit = document.getElementById("submit");
  const cityInput = document.getElementById("city");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d34121d29cmsh9033c4ec9ec477ap1640d1jsn61da41e2a8b7",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        temp.innerHTML = response.temp;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(cityInput.value);
  });
  getWeather("Delhi");
});
