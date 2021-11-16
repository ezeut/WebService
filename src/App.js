import './App.css';

function App() {
  return (
    <div className="main-box">
        <form>
          <div className="title"> 직업가치관검사 </div>
          <div className="input-form">
            <p>
              이름 <br/>
              <input type="text" className="name-input"/> 
            </p>
            <p>
              성별 <br/>
              <label> <input type="radio" className="gender-input" name="gender" value="male" />남자</label> <br/>
              <label> <input type="radio" className="gender-input" name="gender" value="female" />여자</label> <br/>
            </p>
          </div>
            <button type="submit">검사시작</button>
        </form>
      </div>
  );
}

export default App;
