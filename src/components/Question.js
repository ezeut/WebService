import '../css/question.css';
import useFetch from "./useFetch";
import ProgressBar from "./ProgressBar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Question = () => {
    const history = useHistory();
    const { data, error } = useFetch();
    const [ start, setStart ] = useState(0);
    const [ end, setEnd ] = useState(5);
    const [ currentPage, setCurrentPage ] = useState(1);
    const pageNumber = [];
    const Page = Math.ceil(data?.length / 5);
    let [answerList, setAnswerList] = useState([]);
    let [disabled, setDisabled] = useState(true);

    for (let i = 1; i <= Page; i++) {
        pageNumber.push(i);
    }
    useEffect(() => {
        setStart((currentPage - 1) * 5);
        setEnd(currentPage * 5);
        setDisabled(true);
    }, [currentPage]);

    if (error) {
        return <div>{error}</div>;
    }

    const prevPage = () => {
        if ((currentPage-1) === 0) {
            alert("첫번째 페이지입니다.");
        }
        else {
            setCurrentPage(currentPage => (currentPage-1));
        }
    }
    const nextPage = () => {
        if (currentPage === Page) {
            sessionStorage.setItem("answer", answerList);
            history.push('/last');
        }
        else {
            setCurrentPage(currentPage => (currentPage+1));
        }
    }
    const handleOnclick = (e) => {
        let answer = [...answerList];
        answer[(e.target.name-1)] = e.target.value;
        setAnswerList(answer);
        let check = answer.slice(start, end);
        if(currentPage === Page){
            if(check.length===3 && !(check.includes())){
                setDisabled(false);
            }
        } else {
            if(check.length===5 && !(check.includes())){
                setDisabled(false);
            }
        }
    }
    
    
        return (
            <div>
                <div className="question-main">
                    <ProgressBar width={800} percent={(answerList.length)/28} />
            {data?.slice(start, end).map((item) => (
                <div key={item.qitemNo} className="question-box">
                    <br />{item?.qitemNo}번 문항
                    <p>
                        <label style={{lineHeight:"30px"}}>
                            <input 
                                type='radio' name={item.qitemNo} value={item.answerScore01} 
                                defaultChecked={answerList[item.qitemNo-1] === item.answerScore01}
                                onClick={(handleOnclick)}/>
                            {item?.answer01}&nbsp; &nbsp; &nbsp; // <span>{item?.answer03}</span>
                        </label> <br/>
                        <label style={{lineHeight:"30px"}}>
                            <input type='radio' name={item.qitemNo} value={item.answerScore02} 
                                defaultChecked={answerList[item.qitemNo-1] === item.answerScore02}
                                onClick={(handleOnclick)}/>
                            {item?.answer02}&nbsp; &nbsp; &nbsp; // <span>{item?.answer04}</span>
                        </label>
                        <br/><br/>
                        
                        <br/><br/>
                        
                    </p>
                    {console.log(answerList)}
                </div>
            ))}
            <nav style={{ listStyleType: "none", display: "inline-block" }}>
                <button type="button" onClick={prevPage}>이전</button>
                <button type="button" disabled={disabled} onClick={nextPage}>{currentPage === Page ? "제출": "다음"}</button>
            </nav>
        </div>
    </div>
    )
}
export default Question;