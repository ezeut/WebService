import React, {useState, useEffect} from "react";
import "../css/progressbar.css";

function ProgressBar ({ width, percent }) {

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(percent * width);
    });

    return (
        <div className="progress-main">
            <div style={{display:"inline"}}>
                <span style={{textAlign: "left"}}>직업 가치관 검사</span>
                </div>
                <div style={{ display:"inline", width: "800px"}}>
                <div style={{display:"inline-block", width:"520px"}}></div>
                <span style={{textAlign:"right"}}>진행률 {Math.ceil(percent * 100)}%</span></div>
            <div className="progress-bar" style={{ width: width }}>
                <div className="progress-colored" style={{ width: `${value}px` }} />
            </div>
        </div>
    );
};

export default ProgressBar;