import React, { useState } from "react";
import ProgressBar from "./ProgressBar"
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';


function Example() {
    const { data, error } = useFetch();
    let [answer, setAnswer] = useState('');
    let [disabled, setDisabled] = useState(true);

    if (error) {
        return <div>{error}</div>;
    }
    
    function handleClick(e){
        setAnswer(e.target.value)
        if (answer !== null) {
            setDisabled(false)
        }
    }
    return (   
        <div className="main-box">
            <div>
                <p>검사예시</p>
                <ProgressBar width={400} percent={0} />
            </div>
            <div>
            <div>
            {data?.slice(0,1).map((item) => (
                <div key={item?.qitemNo} className="question-box">
                    <br />{item?.question}<br/>
                    <p>
                        <label><input type='radio' name={item?.qitemNo} value={item.answerScore01} onClick={handleClick}/>{item?.answer01}</label>

                        <label><input type='radio' name={item?.qitemNo} value={item.answerScore02} onClick={handleClick}/>{item?.answer02}</label>
                    </p>
                </div>

            ))}
                <div>
                    <Link to="./question">
                        <button type="submit" disabled={disabled}>검사시작</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Example;