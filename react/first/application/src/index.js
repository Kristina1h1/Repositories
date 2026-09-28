import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let albums = [
  {
    name: "19",
    artist: "Adele",
    year: 2008,
    label: "XL Recordings",
    genre: "Soul / Pop",
    tracks: 12,
    songs: [
      "Daydreamer",
      "Best for Last",
      "Chasing Pavements",
      "Cold Shoulder",
      "Crazy for You",
      "Melt My Heart to Stone",
      "First Love",
      "Right as Rain",
      "Make You Feel My Love",
      "My Same",
      "Tired",
      "Hometown Glory"
    ]
  },
  {
    name: "21",
    artist: "Adele",
    year: 2011,
    label: "XL Recordings",
    genre: "Soul / Pop",
    tracks: 11,
    songs: [
      "Rolling in the Deep",
      "Rumour Has It",
      "Turning Tables",
      "Don't You Remember",
      "Set Fire to the Rain",
      "He Won't Go",
      "Take It All",
      "I'll Be Waiting",
      "One and Only",
      "Lovesong",
      "Someone Like You"
    ]
  },
  {
    name: "25",
    artist: "Adele",
    year: 2015,
    label: "XL Recordings",
    genre: "Pop / Soul",
    tracks: 11,
    songs: [
      "Hello",
      "Send My Love (To Your New Lover)",
      "I Miss You",
      "When We Were Young",
      "Remedy",
      "Water Under the Bridge",
      "River Lea",
      "Love in the Dark",
      "Million Years Ago",
      "All I Ask",
      "Sweetest Devotion"
    ]
  }
];

let title = "Мои любимые альбомы";
let slogan = "Музыка, которая со мной всегда";
let copy = "Copyright — 2026";

root.render(
  // <React.StrictMode>
  <App title={title} slogan={slogan} albums={albums} txt={copy} />
  // </React.StrictMode>
);

