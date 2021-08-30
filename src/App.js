import React, {useState} from "react";
import "./App.css";

const api = {
  key: "ee9dbd2dd89e4882fdd5160077024a53",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [ query, setQuery ] = useState ('');
  const [ weather, setWeather ] = useState ({});

  const search = (e) => {
      if (e.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery("");
        });
      }
    }

  const dateBuilder = (d) => {
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let hours = d.getHours() + ":" + d.getMinutes();

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} - ${hours}`
  }

  return (
    <div className="App" style={{backgroundColor: "#346B78"}}>
      <div className="search" ><input type="text" placeholder="Cherche ta ville ..." style={{margin: "40px"}}
      onChange= {e => setQuery(e.target.value)}
      value={query} 
      onKeyPress={search}/></div>

      {(typeof weather.main != "undefined") ? (
    <div>
      <div className="date">{dateBuilder(new Date())} 
</div>
      <div className="location">
        <h1>{weather.name}, {weather.sys.country}</h1>
      </div>
      <img src="/assets/sun.png" alt="img" style={{width: "200px"}}/>
      <div className="degres" style={{fontSize:"60px"}}>{Math.round(weather.main.temp)}°</div>
      {/* pour enlever la virgule */}
      </div>
      ) : ("")}
    </div>
  );
}

export default App;
