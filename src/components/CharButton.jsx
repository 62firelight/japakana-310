function CharButton(props) {
    return (
        <button
            className={
                props.isSelected ? "char-button-selected" : "char-button"
            }
            onClick={() => props.setSelectedChars(props.char)}
        >
            {props.char}
        </button>
    );
}

export default CharButton;
