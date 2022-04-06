//Bethesda usa 4348599
//API key is d5f904f8f6daa8471f822b2e1883e3c2
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=d5f904f8f6daa8471f822b2e1883e3c2&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = document.querySelector('.degree');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconSource = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const description = jsObject.weather[0].description;
    const site = jsObject.main.humidity;
    const citation = jsObject.weather.main;
    const name = jsObject.name;

    document.querySelector('.citation-open').textContent = citation;
    document.querySelector('.cityname').textContent = name;
    document.querySelector('.weather-icon').setAttribute('src', iconSource);
    document.querySelector('.weather-icon').setAttribute('alt', description);
    document.querySelector('.humid').textContent = site;
    document.querySelector('.icon-scr').textContent = description;});

    