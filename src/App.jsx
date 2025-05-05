import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <h1>Japakana</h1>

            <h2>Hiragana</h2>
            <div className="hiragana">
                <div className="row">
                    {/*Label Row */}
                    <button className="header">ー</button>
                    <button className="header">a</button>
                    <button className="header">i</button>
                    <button className="header">u</button>
                    <button className="header">e</button>
                    <button className="header">o</button>
                </div>

                <div className="row">
                    {/* Vowel Row */}
                    <button className="header">ー</button>
                    <button>あ</button>
                    <button>い</button>
                    <button>う</button>
                    <button>え</button>
                    <button>お</button>
                </div>

                {/* k row */}
                <div className="row">
                    <button className="header">k</button>
                    <button>か</button>
                    <button>き</button>
                    <button>く</button>
                    <button>け</button>
                    <button>こ</button>
                </div>

                {/* s row */}
                <div className="row">
                    <button className="header">s</button>
                    <button>さ</button>
                    <button>し</button>
                    <button>す</button>
                    <button>せ</button>
                    <button>そ</button>
                </div>

                {/* t row */}
                <div className="row">
                    <button className="header">t</button>
                    <button>た</button>
                    <button>ち</button>
                    <button>つ</button>
                    <button>て</button>
                    <button>と</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button className="header">n</button>
                    <button>な</button>
                    <button>に</button>
                    <button>ぬ</button>
                    <button>ね</button>
                    <button>の</button>
                </div>

                {/* h row */}
                <div className="row">
                    <button className="header">h</button>
                    <button>は</button>
                    <button>ひ</button>
                    <button>ふ</button>
                    <button>へ</button>
                    <button>ほ</button>
                </div>

                {/* m row */}
                <div className="row">
                    <button className="header">m</button>
                    <button>ま</button>
                    <button>み</button>
                    <button>む</button>
                    <button>め</button>
                    <button>も</button>
                </div>

                {/* y row */}
                <div className="row">
                    <button className="header">y</button>
                    <button>や</button>
                    <button>ー</button>
                    <button>ゆ</button>
                    <button>ー</button>
                    <button>よ</button>
                </div>

                {/* r row */}
                <div className="row">
                    <button className="header">r</button>
                    <button>ら</button>
                    <button>り</button>
                    <button>る</button>
                    <button>れ</button>
                    <button>ろ</button>
                </div>

                {/* w row */}
                <div className="row">
                    <button className="header">w</button>
                    <button>わ</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>を</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button className="header">n</button>
                    <button>ん</button>
                </div>
            </div>

            <h2>Katakana</h2>
            <div className="katakana">
                <div className="row">
                    {/*Label Row */}
                    <button className="header">ー</button>
                    <button className="header">a</button>
                    <button className="header">i</button>
                    <button className="header">u</button>
                    <button className="header">e</button>
                    <button className="header">o</button>
                </div>

                <div className="row">
                    {/* Vowel Row */}
                    <button className="header">ー</button>
                    <button>ア</button>
                    <button>イ</button>
                    <button>ウ</button>
                    <button>エ</button>
                    <button>オ</button>
                </div>

                {/* k row */}
                <div className="row">
                    <button className="header">k</button>
                    <button>カ</button>
                    <button>キ</button>
                    <button>ク</button>
                    <button>ケ</button>
                    <button>コ</button>
                </div>

                {/* s row */}
                <div className="row">
                    <button className="header">s</button>
                    <button>サ</button>
                    <button>シ</button>
                    <button>ス</button>
                    <button>セ</button>
                    <button>ソ</button>
                </div>

                {/* t row */}
                <div className="row">
                    <button className="header">t</button>
                    <button>タ</button>
                    <button>チ</button>
                    <button>ツ</button>
                    <button>テ</button>
                    <button>ト</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button className="header">n</button>
                    <button>ナ</button>
                    <button>ニ</button>
                    <button>ヌ</button>
                    <button>ネ</button>
                    <button>ノ</button>
                </div>

                {/* h row */}
                <div className="row">
                    <button className="header">h</button>
                    <button>ハ</button>
                    <button>ヒ</button>
                    <button>フ</button>
                    <button>へ</button>
                    <button>ホ</button>
                </div>

                {/* m row */}
                <div className="row">
                    <button className="header">m</button>
                    <button>マ</button>
                    <button>三</button>
                    <button>ム</button>
                    <button>メ</button>
                    <button>モ</button>
                </div>

                {/* y row */}
                <div className="row">
                    <button className="header">y</button>
                    <button>ヤ</button>
                    <button>ー</button>
                    <button>ユ</button>
                    <button>ー</button>
                    <button>ヨ</button>
                </div>

                {/* r row */}
                <div className="row">
                    <button className="header">r</button>
                    <button>ラ</button>
                    <button>リ</button>
                    <button>ル</button>
                    <button>レ</button>
                    <button>ロ</button>
                </div>

                {/* w row */}
                <div className="row">
                    <button className="header">w</button>
                    <button>ワ</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>ヲ</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button className="header">n</button>
                    <button>ン</button>
                </div>
            </div>
        </>
    );
}

export default App;
