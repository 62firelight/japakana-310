import { useSearchParams } from "react-router";

function CharactersStudy(props) {
    if (props.isVisible) {
        return (
            <div>
                <h1>Study</h1>

                <div className="character-study">
                    <div className="current-char">あ</div>

                    <input type="text" placeholder="Enter the English translation" />

                    <button>Submit</button>
                </div>
                {/* <h2>Selected Characters</h2>

                <p>
                    {props.selectedChars.length > 0
                        ? props.selectedChars
                        : "None"}
                </p> */}
            </div>
        );
    }
}

export default CharactersStudy;
