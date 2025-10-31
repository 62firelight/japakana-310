import { Link, useSearchParams } from "react-router";
import "../App.css";
import Characters from "./Characters";
import { useState } from "react";
import CharactersStudy from "./CharactersStudy";

function Home(props) {
    const [studyMode, setStudyMode] = useState(false);
    const [selectedChars, setSelectedChars] = useState([]);

    return (
        <>
            <CharactersStudy
                isVisible={studyMode == true}
                setStudyMode={setStudyMode}
                selectedChars={selectedChars}
                setSelectedChars={setSelectedChars}
            />

            <Characters
                type="h"
                isVisible={studyMode == false}
                setStudyMode={setStudyMode}
                selectedChars={selectedChars}
                setSelectedChars={setSelectedChars}
            />
        </>
    );
}

export default Home;
