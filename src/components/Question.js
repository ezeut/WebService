import "../css/question.css"
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Link } from 'react-router-dom';
import Result from "./Result";


function Question() {
    let [percent, setPercent] = useState(0);
    let axios = require('axios');
    let [item, setItem] = useState([]);
    let [answer, setAnswer] = useState('');
    let [disabled, setDisabled] = useState(true);

    let res;
    let config = {
        method: 'get',
        url: 'https://www.career.go.kr/inspct/openapi/test/questions?apikey=a1a6bd295f99062830aa64111bebad81&q=6',
        headers: { 
            'Cookie': 'KHANUSER=z1nls2tqru7fkd'
        }
    };

    axios(config)
    .then(function (response) {
        res = JSON.stringify(response.data)
        let arr = [];
        for(let i=0; i<res.length; i++){
            arr[i] = [JSON.parse(res).RESULT[i].question,JSON.parse(res).RESULT[i].answer01,JSON.parse(res).RESULT[i].answer02]
        }
        setItem(arr)
    })
    .catch(function (error) {
        console.log(error);
    });

    function rendering() {
        console.log(item);
        const result = [];
        for(let i=0; i<28; i++){
            result.push(
                <span key={i}>
                    <div>{item}</div>
                </span>
            );
        return result;
        }
    }

    function handleClick(e){
        setAnswer(e.target.value)
        if (answer !== null) {
            setDisabled(false)
        } 
    }

    function updatePercent(field, val) {
        setPercent({[field]: val});    
    }
    
    return (
        
        <div className="main-box">
            <div>
                <p>검사</p>
                <ProgressBar width={400} percent={1} />
            </div>
            <div>
            <div>
                <div>
                    {rendering()}
                </div>
                <div>
                    <Link to="./result">
                        <button type="submit" disabled={disabled}>검사시작</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Question;