import "./App.css";
import { useState } from "react";
import emojisData from "./emojiData";

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(
    "Your Interpretation of emoji will appear here!"
  );
  function inputOnChangeHandler(event) {
    const inputValue = event.target.value.trim();
    // const inputEmoji = inputValue[inputValue.length - 2];
    setEmoji(inputValue);
    console.log(emoji);
    const emojiMeaning = emojisData[inputValue];
    if (emojiMeaning) {
      setMeaning(emojiMeaning);
      console.log(emojiMeaning);
    } else {
      setMeaning(
        "Either we don't have this emoji in our database or what you entered is not an emoji. Please input a single emoji at a time"
      );
    }
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
        emoji and therir meaning to help you!
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
      <div className="meaning">{meaning}</div>
    </div>
  );
}

export default App;
