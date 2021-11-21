import {useState} from 'react';
import { Link } from 'react-router-dom';

function Api(props){
    let axios = require('axios');
    let [question, setQuestion] = useState('');
    let [answer1, setAnswer1] = useState('');
    let [answer2, setAnswer2] = useState('');
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
        if (props.page === 'ex'){
            setQuestion(JSON.parse(res).RESULT[0].question);
            setAnswer1(JSON.parse(res).RESULT[0].answer01);
            setAnswer2(JSON.parse(res).RESULT[0].answer02);
        } else if (props.page === 'test'){
            let qnum = (JSON.parse(res).RESULT).length
        }
    })
    .catch(function (error) {
        alert("실패")
        console.log(error);
    });

    function handleClick(e){
        setAnswer(e.target.value)
        if (answer !== null) {
            setDisabled(false)
        } 
    }
        
        return (
            <div>
                <div>
                    {question} <br />
                    <label><input type='radio' name='ans' value='1' onClick={handleClick} />{answer1}</label>
                    <label><input type='radio' name='ans' value='2' onClick={handleClick} />{answer2}</label>
                </div>
                <div>
                    <Link to="./test">
                        <button type="submit" disabled={disabled}>검사시작</button>
                    </Link>
                </div>
            </div>
            
        );

}
export default Api;
