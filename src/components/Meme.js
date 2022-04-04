import React from "react";
import memesData from "../memesData";

const Meme = () => {
  const getMemeImage = (e) => {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    console.log(url);
  };

  return (
    <main>
      <form className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
};

export default Meme;
