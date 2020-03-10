import React from "react";
import "./App.css";
import Track from "./Track";

const tracks = [
  {
    artist: "Linkin Park",
    title: "In The End",
    img: "https://via.placeholder.com/80"
  },
  {
    artist: "Queen",
    title: "Bohemian Rhapsody",
    img: "https://via.placeholder.com/80"
  }
];

function App() {
  return (
    <div className="App">
      {tracks.map(({ artist, title, img }, i) => (
        <Track key={artist + title} artist={artist} title={title} img={img} />
      ))}
    </div>
  );
}

export default App;
