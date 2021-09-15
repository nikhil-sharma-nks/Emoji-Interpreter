import "./App.css";
import { useState } from "react";
import { emojisData, showcaseEmoji } from "./emojiData";

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Your Interpretation of emoji will appear here!"
  );
  function inputOnChangeHandler(event) {
    const inputValue = event.target.value.trim();
    setEmoji(inputValue);
    console.log(emoji);
    searchMeaning(inputValue);
  }

  function searchMeaning(emoji) {
    const emojiMeaning = emojisData[emoji];
    if (emojiMeaning) {
      setMeaning(emojiMeaning);
      console.log(emojiMeaning);
    } else {
      setMeaning(
        "Either we don't have this emoji in our database or what you entered is not an emoji. Please input a single emoji at a time"
      );
    }
  }

  function emojiClickHandler(event) {
    console.log(event.target.innerText);
    setEmoji(event.target.innerText);
    searchMeaning(event.target.innerText);
  }

  function handleClearOnClick() {
    setEmoji("");
    setMeaning("Your Interpretation of emoji will appear here!");
  }

  return (
    <div className="App">
      <div className="heading">
        <h1>Emoji Interpreter</h1>
      </div>
      <div className="description">
        There are thousands of emoji available, but I am sure sometimes you
        don't know what exactly do the mean. So I have compiled thousands of
        emoji and their meaning to help you!
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search you emoji here"
          value={emoji}
          onChange={inputOnChangeHandler}
        ></input>
        <button className="clearButton" onClick={handleClearOnClick}>
          Clear
        </button>
      </div>
      <div className="meaning">{meaning.toUpperCase()}</div>
      <div className="showcase">
        <div className="emoji-showcase">
          {Object.keys(showcaseEmoji).map((element) => {
            return (
              <div
                key={element}
                className="emoji-showcase-element"
                onClick={emojiClickHandler}
              >
                {element}
              </div>
            );
          })}
        </div>
      </div>
      <footer className="main-footer">
        <div className="footer-content container">
          <p className="footer-text">
            Made with ❤ by Nikhil <br />
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/nikhil-sharma-nks/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-3x" />
            </a>
            <a
              href="https://github.com/nikhil-sharma-nks"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-3x" />
            </a>
            <a
              href="https://twitter.com/wannabe_nikhil"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-3x" />
            </a>
            <a
              href="https://www.facebook.com/nikhilshawarma/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-facebook fa-3x" />
            </a>
            <a
              href="https://www.instagram.com/nikhil.shawarma/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-3x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
