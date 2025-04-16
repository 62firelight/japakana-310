import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <h1>Japakana</h1>

            <div className="hiragana">
                <div className="row">
                    {/*Label Row */}
                    <button>ー</button>
                    <button>a</button>
                    <button>i</button>
                    <button>u</button>
                    <button>e</button>
                    <button>o</button>
                </div>

                <div className="row">
                    {/* Vowel Row */}
                    <button>ー</button>
                    <button>あ</button>
                    <button>い</button>
                    <button>う</button>
                    <button>え</button>
                    <button>お</button>
                </div>

                {/* k row */}
                <div className="row">
                    <button>k</button>
                    <button>か</button>
                    <button>き</button>
                    <button>く</button>
                    <button>け</button>
                    <button>こ</button>
                </div>

                {/* s row */}
                <div className="row">
                    <button>s</button>
                    <button>さ</button>
                    <button>し</button>
                    <button>す</button>
                    <button>せ</button>
                    <button>そ</button>
                </div>

                {/* t row */}
                <div className="row">
                    <button>t</button>
                    <button>た</button>
                    <button>ち</button>
                    <button>つ</button>
                    <button>て</button>
                    <button>と</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button>n</button>
                    <button>な</button>
                    <button>に</button>
                    <button>ぬ</button>
                    <button>ね</button>
                    <button>の</button>
                </div>

                {/* h row */}
                <div className="row">
                    <button>h</button>
                    <button>は</button>
                    <button>ひ</button>
                    <button>ふ</button>
                    <button>へ</button>
                    <button>ほ</button>
                </div>

                {/* m row */}
                <div className="row">
                    <button>m</button>
                    <button>ま</button>
                    <button>み</button>
                    <button>む</button>
                    <button>め</button>
                    <button>も</button>
                </div>

                {/* y row */}
                <div className="row">
                    <button>y</button>
                    <button>や</button>
                    <button>ー</button>
                    <button>ゆ</button>
                    <button>ー</button>
                    <button>よ</button>
                </div>

                {/* r row */}
                <div className="row">
                    <button>r</button>
                    <button>ら</button>
                    <button>り</button>
                    <button>る</button>
                    <button>れ</button>
                    <button>ろ</button>
                </div>

                {/* w row */}
                <div className="row">
                    <button>w</button>
                    <button>わ</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>ー</button>
                    <button>を</button>
                </div>

                {/* n row */}
                <div className="row">
                    <button>n</button>
                    <button>ん</button>
                </div>
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
