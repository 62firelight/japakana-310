import HIRAGANA_CHARS from "../util/HiraganaChars";
import KATAKANA_CHARS from "../util/KatakanaChars";
import CharButton from "./CharButton";

function CharacterRows(props) {
    let chosenType = "h";
    let kanaName = "Hiragana";
    switch (props.kanaType) {
        case "h":
            chosenType = HIRAGANA_CHARS;
            kanaName = "Hiragana";
            break;
        case "k":
            chosenType = KATAKANA_CHARS;
            kanaName = "Katakana";
            break;
        default:
            chosenType = HIRAGANA_CHARS;
            kanaName = "Hiragana";
            break;
    }

    const rows = createRows(props.kanaType);

    function createRows() {
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

    function selectAllChars(rows) {
        // Generate a new array and fill it with all characters
        let newSelectedChars = [];
        for (const row of rows) {
            for (const charButton of row.props.children) {
                newSelectedChars = [...newSelectedChars, charButton.props.char];
            }
        }

        // Override current array of selected characters
        props.setSelectedChars(Array.from(new Set(props.selectedChars.concat(newSelectedChars))));
    }

    function unselectAllChars() {
        // Unselect all the rows
        let newSelectedChars = props.selectedChars;
        console.log(newSelectedChars);
        for (const row of rows) {
            for (const charButton of row.props.children) {
                newSelectedChars = newSelectedChars.filter((char) => char !== charButton.props.char);
            }
        }
        console.log(newSelectedChars);

        // Override current array of selected characters
        props.setSelectedChars(Array.from(new Set(newSelectedChars)));
    }

    if (props.isVisible) {
        return (
            <div className="rows">
                <h3>{kanaName}</h3>
                <div className="selection-buttons">
                    {!chosenType.every((row) =>
                        row.every((char) => props.selectedChars.includes(char))
                    ) ? (
                        <button onClick={() => selectAllChars(rows)}>
                            Select All
                        </button>
                    ) : (
                        <button onClick={unselectAllChars}>Unselect All</button>
                    )}
                </div>
                {rows}
            </div>
        );
    }
}

export default CharacterRows;
