import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharButton from "./components/CharButton";
import hiraganaChars from "./util/HiraganaChars";
import HIRAGANA_CHARS from "./util/HiraganaChars";

function App() {
    const [selectedChars, setSelectedChars] = useState([]);
    const rows = createRows();

    function createRows() {
        return HIRAGANA_CHARS.map((row, index) => (
            <div className="row" key={index}>
                {row.map((char) => (
                    <CharButton
                        char={char}
                        key={char}
                        isSelected={selectedChars.includes(char)}
                        setSelectedChars={setNewSelectedChars}
                    />
                ))}
            </div>
        ));
    }

    function setNewSelectedChars(newChar) {
        if (!selectedChars.includes(newChar)) {
            // Add character if not selected
            setSelectedChars([...selectedChars, newChar]);
        } else {
            // Remove character if already selected
            setSelectedChars(selectedChars.filter((char) => char !== newChar));
        }
    }

    return (
        <>
            {/* <h1>Japakana</h1> */}

            <h2>Selected Characters</h2>

            <p>{selectedChars.length > 0 ? selectedChars : "None"}</p>

            {/* <h2>Hiragana</h2> */}
            <div className="hiragana">{rows}</div>
        </>
    );
}

export default App;
