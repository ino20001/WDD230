//San Mateo Rizal PH 1689056
//API key is d5f904f8f6daa8471f822b2e1883e3c2
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1689056&appid=d5f904f8f6daa8471f822b2e1883e3c2&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let temp = document.querySelector('.degree');
    temp.textContent = jsObject.main.temp.toFixed(1);
    const iconSource = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const description = jsObject.weather[0].description;
    const site = jsObject.wind.speed;
    const citation = jsObject.cod;
    document.querySelector('.weather-icon').setAttribute('src', iconSource);
    document.querySelector('.weather-icon').setAttribute('alt', description);
    document.querySelector('.windspeed').textContent = site;
    document.querySelector('.citation-open').textContent = citation;
    document.querySelector('.icon-scr').textContent = description;});


    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 5,cityid: '1689056',appid: 'd5f904f8f6daa8471f822b2e1883e3c2',units: 'metric',containerid: 'openweathermap-widget-5',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
    