import React from "react";
import "./App.css";

function App() {

  const dateBuilder = (d) => {
    let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <div className="date">{dateBuilder(new Date())}</div>
      <div className="location">
        <h1>Rome</h1>
      </div>
      <img src="/assets/sun.png" alt="img" />
      <div className="degres">13°C</div>
      <div className="weather">Ensoleillé</div>
    </div>
  );
}

export default App;
