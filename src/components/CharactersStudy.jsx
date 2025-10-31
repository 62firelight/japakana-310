import { useState } from "react";
import ANSWERS from "../util/Answers";

function CharactersStudy(props) {
    const charactersToStudy = props.selectedChars;

    const [currentCharQuestion, setCurrentCharQuestion] = useState(
        charactersToStudy.length > 0 ? charactersToStudy[0] : ""
    );
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [progressIndex, setProgressIndex] = useState(0);

    function resetProgress() {
        setProgressIndex(0);
        setCurrentCharQuestion(charactersToStudy[0]);
    }

    if (props.isVisible && currentCharQuestion === "") {
        resetProgress();
    }

    function handleChange(event) {
        setCurrentAnswer(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Check if the provided answer is correct
        if (
            ANSWERS.get(currentCharQuestion) == currentAnswer ||
            ANSWERS.getKey(currentCharQuestion) == currentAnswer
        ) {
            alert("Correct!");
        } else {
            alert("Incorrect");
        }

        if (progressIndex < charactersToStudy.length - 1) {
            setCurrentCharQuestion(charactersToStudy[progressIndex + 1]);
            setProgressIndex(progressIndex + 1);
        } else {
            alert("Finished!");
            props.setStudyMode(false);
            props.setSelectedChars([]);
            resetProgress();
        }

        setCurrentAnswer("");
    }

    if (props.isVisible) {
        return (
            <div>
                <h1>Study</h1>

                <form className="character-study" onSubmit={handleSubmit}>
                    <div className="current-char">{currentCharQuestion}</div>

                    <input
                        type="text"
                        id="answer-input"
                        name="text"
                        autoComplete="off"
                        value={currentAnswer}
                        onChange={handleChange}
                        placeholder="Enter the English translation"
                    />

                    <button type="submit">Submit</button>
                </form>

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
