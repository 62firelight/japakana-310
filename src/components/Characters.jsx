import HIRAGANA_CHARS from "../util/HiraganaChars";
import KATAKANA_CHARS from "../util/KatakanaChars";
import CharButton from "./CharButton";

function Characters(props) {
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
                        isSelected={props.selectedChars.includes(char)}
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

        if (!props.selectedChars.includes(newChar)) {
            // Add character if not selected
            props.setSelectedChars([...props.selectedChars, newChar]);
        } else {
            // Remove character if already selected
            props.setSelectedChars(
                props.selectedChars.filter((char) => char !== newChar)
            );
        }
    }

    if (props.isVisible) {
        return (
            <div className="kana-chars">
                <h1>Characters</h1>
                <button
                    onClick={() =>
                        props.selectedChars.length > 0
                            ? props.setStudyMode(true)
                            : alert(
                                  "Please select at least one character to study first."
                              )
                    }
                >
                    Study!
                </button>
                <div className="rows">{rows}</div>
            </div>
        );
    }
}

export default Characters;
