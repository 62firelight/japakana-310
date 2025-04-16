import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <h1>Japakana</h1>

            <div className="hiragana">
                {/* <div className="column-label">k s t n h m y r w n</div> */}
                <div className="row">
                    <div className="col-label">a i u e o</div>
                </div>

                <div className="row">
                    <div className="character">あ</div>
                    <div className="character">い</div>
                    <div className="character">う</div>
                    <div className="character">え</div>{" "}
                    <div className="character">お</div>
                </div>
                {/* <div className="row"><div className="column-label">k</div> かきくけこ</div> */}
                {/* <div className="row">s さしすせそ</div>
                <div className="row">t たちつてと</div>
                <div className="row">n なにぬねの</div>
                <div className="row">h はひふへほ</div>
                <div className="row">m まみむめも</div>
                <div className="row">y や　ゆ　よ</div>
                <div className="row">r らりるれろ</div>
                <div className="row">w わ　　　を</div>
                <div className="row">n ん</div> */}
            </div>

            {/* <div className="katakana">
                <div className="row">アイウエオ</div>
                <div className="row">かきくけこ</div>
                <div className="row">サシスセソ</div>
                <div className="row">タチツテト</div>
                <div className="row">ナニヌネノ</div>
                <div className="row">ハヒフヘホ</div>
                <div className="row">マミムメモ</div>
                <div className="row">ヤ　ユ　ヨ</div>
                <div className="row">ラリルレロ</div>
                <div className="row">ワ　　　ヲ</div>
                <div className="row">ン</div>
            </div> */}
        </>
    );
}

export default App;
