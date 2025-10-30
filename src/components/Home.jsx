import { Link, useSearchParams } from "react-router";
import "../App.css";
import Characters from "./Characters";
import { useState } from "react";

function Home(props) {


    return (
        <>
            <Link to={searchParams.toString()}>Study</Link>

            <Characters type="h" setSearchParams={setSearchParams} />
        </>
    );
}

export default Home;