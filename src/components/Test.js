import "../css/question.css"
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Api from "../Api";

function Example() {
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
                <Api page="test"/>
            </div>
        </div>
    );
}

export default Example;