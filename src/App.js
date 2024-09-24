import React from "react";
import "./App.css";
import Menu from "./Menu";



function App() {
  return (
    <div>
      <p id="rec">RECOMMENDED MOVIES</p>
      <hr />
      <br />
     
      <Menu />

      <div id="main">
        <div id="mov">
          <img
            id="imgm"
            src="https://i0.wp.com/moviegalleri.net/wp-content/uploads/2024/02/Actor-Dhanush-Raayan-Movie-First-Look-Poster-HD.jpg?ssl=1"
            alt="Raayan"
          />
          <p>Raayan</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_.jpg"
            alt="Deadpool"
          />
          <p>Deadpool</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://media-cache.cinematerial.com/p/500x/yewrl6ik/boat-indian-movie-poster.jpg?v=1722017226"
            alt="Boat"
          />
          <p>Boat</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://www.behindwoods.com/tamil-movies/indian-2/stills-photos-pictures/indian-2-stills-photos-pictures-04.jpg"
            alt="Indian 2"
          />
          <p>Indian 2</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Jama_%28film%29.jpg"
            alt="Jama"
          />
          <p>Jama</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://timesofindia.indiatimes.com/photo/112100833.cms"
            alt="Pechi"
          />
          <p>Pechi</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://i.pinimg.com/originals/b9/8b/f1/b98bf12c0ba09b7cdc880e408b00d350.jpg"
            alt="Kalki"
          />
          <p>Kalki</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://m.media-amazon.com/images/M/MV5BOTYwYzM0OGUtOGVjYi00YzRkLWIyZTctZTBiODM5NTBmZGIwXkEyXkFqcGc@._V1_.jpg"
            alt="Trap"
          />
          <p>Trap</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://stat4.bollywoodhungama.in/wp-content/uploads/2024/07/Ulajh-2-322x402.jpg"
            alt="Ulajh"
          />
          <p>Ulajh</p>
        </div>
        <div id="mov">
          <img
            id="imgm"
            src="https://i0.wp.com/pixarpost.com/wp-content/uploads/2024/03/Inside-Out-2-Poster.jpeg?resize=1000%2C1481&ssl=1"
            alt="Inside Out 2"
          />
          <p>Inside Out 2</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
