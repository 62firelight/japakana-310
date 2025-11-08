import HIRAGANA_CHARS from "../util/HiraganaChars";
import KATAKANA_CHARS from "../util/KatakanaChars";
import CharacterRows from "./CharacterRows";
import CharButton from "./CharButton";

function Characters(props) {
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
                <div className="helper-buttons"></div>

                <div className="kana-groups">
                    <CharacterRows
                        isVisible={props.isVisible}
                        kanaType="h"
                        selectedChars={props.selectedChars}
                        setSelectedChars={props.setSelectedChars}
                    />

                    <CharacterRows
                        isVisible={props.isVisible}
                        kanaType="k"
                        selectedChars={props.selectedChars}
                        setSelectedChars={props.setSelectedChars}
                    />
                </div>
            </div>
        );
    }
}

export default Characters;
