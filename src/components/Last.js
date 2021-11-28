import '../css/last.css'
import { useHistory } from 'react-router';

function Last() {
    const history = useHistory();
    return (
        <div className="last-box">
            <h2>검사가 완료되었습니다.</h2>
            <div>
                <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,<br/>
               중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            <div>
                <button onClick={()=>{history.push('/result')}}>결과보기</button>
            </div>
            </div>
        </div>
            );
}

export default Last;