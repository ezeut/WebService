import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/result.css";

function Result() {
    const arr = (localStorage.getItem('answer')).split(",");
    let answers = '';
    for (let i = 0; i <arr.length; i++){
        answers += (i+1)+'='+ arr[i]+' '
    }
    console.log(answers);
    const params = {
        targetSe: '100207',
        name: localStorage.getItem('name'),
        gender: localStorage.getItem('gender'),
        school: '',
        grade: '',
        email: '',
        startDtm: '',
        answers: answers
    }

    useEffect(()=>{
        async function fetch () {
            try{
                const res = await axios.post(
                    'https://www.career.go.kr/inspct/openapi/test/report?apikey=a1a6bd295f99062830aa64111bebad81&qestrnSeq=6',
                    params
                );
                const result = res.data.RESULT.url.split('seq=')[1];
            }
            catch (error) {
                console.error(error);
            }
            
        }
    })
    
    
    // method: 'post',
    // headers: { 
    //     'Cookie': 'KHANUSER=z1nls2tqru7fkd'
    // }
    // };

    
    return (
        <div className="result-box">
            <h2>검사가 완료되었습니다.</h2>
            <div>
                <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,<br/>
                중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
                <div>
                    <button >결과보기</button>
                </div>
            </div>
        </div>
    )
}

export default Result;