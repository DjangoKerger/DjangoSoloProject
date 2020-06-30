import React, { useState, useEffect } from "react";

const Weather = () => {
  const [hasError, setErrors] = useState(false);
  const [weather, setWeather] = useState({});

    const query = "houston"
    //  req.body.cityName;
    const apiKey = "3df84af1828eb0aaca341401c109840c";
    const unit = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ unit +"&appid="+ apiKey

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => setWeather(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

            const weatherData = JSON.parse(weather);
            console.log(weatherData)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  return (
    
    <div>
      <h1>{temp} {imgURL}</h1>  
      <p>"the weather is currently" + {weatherDescription}  </p>
      {console.log(hasError)}
    </div>
    
  );
};
export default Weather;