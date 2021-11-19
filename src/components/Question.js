import "../css/question.css"
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function Question() {
    let [percent, setPercent] = useState(0);
    function updatePercent(field, val) {
        setPercent({[field]: val});    
    }
    return (
        <div className="main-box">
            <div>
                <p>검사예시</p>
                <ProgressBar width={400} percent={percent} />
            </div>
            <div>
                
            </div>
            <div>
                <button>검사시작</button>
            </div>
        </div>
    );
}

export default Question;