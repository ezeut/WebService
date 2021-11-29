import '../css/last.css'
import { useHistory } from 'react-router';

function Last() {
    const history = useHistory();
    return (
        <div className="last-box">
            <h2>검사가 완료되었습니다.</h2>
            <div>
                <p style={{lineHeight: "27px", fontSize: "20px"}}>직업가치란 직업생활을 통하여 충족하고자 하는 욕구 또는 상대적으로 중요시하는 것을 의미합니다.<br/>
                이 검사는 직업과 관련된 다양한 욕구 및 가치들에 대해 여러분이 상대적으로 무엇을 얼마나 더 중요하게 여기는가를 살펴보고,<br />
                그 가치가 충족될 가능성이 높은 직업을 탐색할 수 있도록 도움을 주는 검사입니다</p>
            <div>
                <button onClick={()=>{history.push('/result')}}>결과보기</button>
            </div>
            </div>
        </div>
            );
}

export default Last;