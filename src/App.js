import React, { useState, useEffect } from 'react';


import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [apiKey, setapiKey] = useState("lRnpiqlWz8znjm3S0W2g3q_nH-YY_7vQ0vWGDSMyTcw")
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=london&client_id=${apiKey}`)
    .then(response => response.json())
    .then(result =>{
      console.log(result);
      setPhotos(result.results)
    })
  }, [])
  return (
    <div className="App">
    <div>YELLOW CLASSs</div>
      <div className ="photo">
        {photos.map((item, i) => (
          <div key ={i}>
            <img src = {item.urls.small} alt ="noImage"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
