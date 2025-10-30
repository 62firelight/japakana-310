import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharButton from "./components/CharButton";
import HIRAGANA_CHARS from "./util/HiraganaChars";
import KATAKANA_CHARS from "./util/KatakanaChars";
import HiraganaCharacters from "./components/Characters";
import Characters from "./components/Characters";

function App() {


    return (
        <>
            {/* <h1>Japakana</h1> */}

            <Characters type='h' />
        </>
    );
}

export default App;
