import React, {useState, useEffect} from "react";
import "../css/ProgressBar.css";

function ProgressBar ({ width, percent }) {

    const [value, setValue] = useState(0);
  
    useEffect(() => {
      setValue(percent * width);
    });
  
    return (
        <div className="progress-main">
            <div className="preogress-nav">
                <span>진행률</span>
                <div className="progress-bar" style={{ width: width }}>
                    <div className="progress-colored" style={{ width: `${value}px` }} />
                </div>
            </div>
        </div>
    );
  };

  export default ProgressBar;