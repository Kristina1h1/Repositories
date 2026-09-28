import { useState } from 'react';
import Header from '../header/Header';
import Album from '../album/Album';
import Footer from '../footer/Footer';
import './App.css';

function App(props) {
  let { title, slogan, albums, txt } = props;

  const [current, setCurrent] = useState(1);

  const prev = () => {
    setCurrent((current - 1 + albums.length) % albums.length);
  };
  const next = () => {
    setCurrent((current + 1) % albums.length);
  };

  return (
    <div className="App">
      <Header title={title} slogan={slogan} />

      <div className="carousel">
        <button className="carousel-btn" onClick={prev}>◀</button>

        <div className="carousel-stage">
          {albums.map((album, i) => {
            let pos = "side";
            if (i === current) {
              pos = "active";
            } else if (i === (current - 1 + albums.length) % albums.length) {
              pos = "left";
            } else if (i === (current + 1) % albums.length) {
              pos = "right";
            }

            return (
              <div key={i} className={`album-slot ${pos}`}>
                <Album
                  name={album.name}
                  artist={album.artist}
                  year={album.year}
                  label={album.label}
                  genre={album.genre}
                  tracks={album.tracks}
                  songs={album.songs}
                />
              </div>
            );
          })}
        </div>

        <button className="carousel-btn" onClick={next}>▶</button>
      </div>

      <div className="carousel-dots">
        {albums.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <Footer copyright={txt} />

    </div>
  );
}

export default App;
