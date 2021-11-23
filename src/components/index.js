import "../css/User.css"
import React, {useState}  from "react";
import {Link} from "react-router-dom";

function Test(){
    let [name, setName] = useState('');
    let [gender, setGender] = useState('');
    let [disabled, setDisabled] = useState(true);
    let val = [];

    function handleDisabled(){
        if ((val[0]===val[1])) {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
    }

    function handleChange(e){
        setName(e.target.value)
        if (name !== null) {
            val[0] = 1;
        } else {
            val[0] = 0;
        }
    }

    
    function handleClick(e){
        setGender(e.target.value)
        if (gender !== null) {
            val[1] = 1;
        } else {
            val[1] = 0;
        }
    }


    return (
      <div className="main-box">
              <form>
                <div className="title"> 직업가치관검사 </div>
                  <div className="input-form">
                    <p>
                      이름 <br/>
                      <input type="text" className="name-input" name="name" value={name} onChange={ handleChange }/> 
                    </p>
                    <p>
                      성별 <br/>
                      <label> <input type="radio" className="gender-input" name="gender" value="male" onClick = {handleClick ,handleDisabled}/>남자</label> <br/>
                      <label> <input type="radio" className="gender-input" name="gender" value="female" onClick = {handleClick, handleDisabled}/>여자</label> <br/>
                    </p>
                  </div>
                  <Link to="./example">
                    <button type="submit" disabled={disabled}>검사시작</button>
                  </Link>
              </form>
            </div>
    )
  }

  export default Test;