import { useState } from "react";
import HIRAGANA_CHARS from "../util/HiraganaChars";
import KATAKANA_CHARS from "../util/KatakanaChars";
import CharButton from "./CharButton";
import { useSearchParams } from "react-router";

function Characters(props) {
    const [selectedChars, setSelectedChars] = useState([]);
    const rows = createRows(props.type);

    function createRows(type) {
        let chosenType = null;

        switch (type) {
            case "h":
                chosenType = HIRAGANA_CHARS;
                break;
            case "k":
                chosenType = KATAKANA_CHARS;
                break;
            default:
                chosenType = HIRAGANA_CHARS;
                break;
        }

        return chosenType.map((row, index) => (
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
        if (newChar === "ー") {
            return;
        }

        if (!selectedChars.includes(newChar)) {
            // Add character if not selected
            setSelectedChars([...selectedChars, newChar]);
            props.setSearchParams((searchParams) => {
                searchParams.set("charactersToStudy", [
                    ...selectedChars,
                    newChar,
                ]);
                return searchParams;
            });
        } else {
            // Remove character if already selected
            setSelectedChars(selectedChars.filter((char) => char !== newChar));

            props.setSearchParams((searchParams) => {
                searchParams.set(
                    "charactersToStudy",
                    selectedChars.filter((char) => char !== newChar)
                );

                if (searchParams.get("charactersToStudy").length === 0) {
                    searchParams.delete("charactersToStudy");
                }
                return searchParams;
            });
        }
    }

    return (
        <div className="kana-chars">
            <h2>Selected Characters</h2>

            <p>{selectedChars.length > 0 ? selectedChars : "None"}</p>

            {/* <h2>Hiragana</h2> */}
            <div className="rows">{rows}</div>
        </div>
    );
}

export default Characters;
