import { useSearchParams } from "react-router";

function CharactersStudy(props) {
    const [searchParams] = useSearchParams();

    return (
        <div>
            <h1>Study</h1>

            {searchParams.get("charactersToStudy")}
        </div>
    )
}

export default CharactersStudy;