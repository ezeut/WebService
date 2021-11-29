import React, { useState } from "react";
import ProgressBar from "./ProgressBar"
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';


function Example() {
    const { data, error } = useFetch();
    let [answer, setAnswer] = useState('');
    let [disabled, setDisabled] = useState(true);
    let [percent, setPercent] = useState(0);

    if (error) {
        return <div>{error}</div>;
    }
    
    function handleClick(e){
        setAnswer(e.target.value)
        if (answer !== null) {
            setDisabled(false)
            setPercent(1);
        }
    }
    return (   
        <div className="question-main">
            <div className="question-list">
                <h1>검사예시</h1> <br/><br/>
                <ProgressBar width={800} percent={percent} />
            </div>
            <div>
                <p style={{ textAlign: 'left', lineHeight: '30px', marginBottom:'40px'}}>직업과 관련된 두 개의 가치 중에서 본인에게 더 중요한 가치에 표시하세요.<br/>
                    가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
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
            </div>
            <div>
                    <Link to="./question">
                        <button type="submit" disabled={disabled}>검사시작</button>
                    </Link>
            </div>
            </div>
        </div>
    );
}

export default Example;