import { useState } from "react";
import ANSWERS from "../util/Answers";

function CharactersStudy(props) {
    const charactersToStudy = props.selectedChars;

    // Question tracking
    const [currentCharQuestion, setCurrentCharQuestion] = useState(
        props.studyMode ? charactersToStudy[0] : ""
    );
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [progressIndex, setProgressIndex] = useState(0);
    const [answerStatus, setAnswerStatus] = useState("");

    // Correct/incorrect answer tracking
    const [answerSummary, setAnswerSummary] = useState({});
    const [answerSummaryComponent, setAnswerSummaryComponent] = useState("");

    function resetProgress(fullReset = false) {
        setProgressIndex(0);

        if (fullReset) {
            setCurrentCharQuestion("");
        } else {
            setCurrentCharQuestion(charactersToStudy[0]);
        }
    }

    if (props.isVisible && currentCharQuestion === "") {
        resetProgress();
    }

    function checkAnswer() {
        // Check if the provided answer is correct
        if (
            ANSWERS.get(currentCharQuestion) == currentAnswer ||
            ANSWERS.getKey(currentCharQuestion) == currentAnswer
        ) {
            setAnswerStatus("Correct! Press ENTER to continue.");
            setAnswerSummary({
                ...answerSummary,
                [currentCharQuestion]: true,
            });
        } else {
            setAnswerStatus("Incorrect! Press ENTER to continue.");
            setAnswerSummary({
                ...answerSummary,
                [currentCharQuestion]: false,
            });
        }
    }

    function handleChange(event) {
        setCurrentAnswer(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (answerStatus.length <= 0) {
            checkAnswer();
        } else if (progressIndex < charactersToStudy.length - 1) {
            setCurrentCharQuestion(charactersToStudy[progressIndex + 1]);
            setProgressIndex(progressIndex + 1);
            setAnswerStatus("");
            setCurrentAnswer("");
        } else {
            setAnswerStatus("");
            setCurrentAnswer("");
            props.setSelectedChars([]);

            setAnswerSummaryComponent(
                Object.entries(answerSummary).map(([key, value]) => {
                    return (
                        <li>
                            {key}{" "}
                            {value ? (
                                <span className="correct">Correct</span>
                            ) : (
                                <span className="incorrect">Incorrect</span>
                            )}
                        </li>
                    );
                })
            );
        }
    }

    function finishStudySession() {
        resetProgress(true);
        setAnswerSummary({});
        setAnswerSummaryComponent("");
        props.setStudyMode(false);
    }

    if (props.isVisible) {
        return (
            <div>
                <h1>Study</h1>

                {answerSummaryComponent.length <= 0 ? (
                    <form className="character-study" onSubmit={handleSubmit}>
                        <div className="progress-indicator">
                            {progressIndex + 1} / {charactersToStudy.length}
                        </div>

                        <div className="current-char">
                            {currentCharQuestion}
                        </div>

                        <div
                            className={
                                answerStatus[0] == "C" ? "correct" : "incorrect"
                            }
                        >
                            {answerStatus}
                        </div>

                        <input
                            type="text"
                            id="answer-input"
                            name="text"
                            autoComplete="off"
                            value={currentAnswer}
                            onChange={handleChange}
                            readOnly={answerStatus.length > 0}
                            placeholder="Enter the English translation"
                        />

                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className="summary">
                        <button onClick={finishStudySession}>Finish</button>

                        <h2>Answer Summary</h2>

                        <ul className="answer-summary">
                            {answerSummaryComponent}
                        </ul>
                    </div>
                )}

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
