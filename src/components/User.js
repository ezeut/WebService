import "../css/User.css"
import React, {useState}  from "react";
import request from "react";
import {Link} from "react-router-dom";

function User(){
    let [name, setName] = useState('');
    let [gender, setGender] = useState('');
    let [disabled, setDisabled] = useState(true);

    function handleChange(e){
        setName(e.target.value)
        name = e.target.value
        if (name !== null) {
            setDisabled('1')
        }
    }

    function handleClick(e){
        setGender(e.target.value)
        gender = e.target.value
        if (gender !== null) {
            setDisabled(disabled===1)
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
                      <label> <input type="radio" className="gender-input" name="gender" value="male" onClick = {handleClick}/>남자</label> <br/>
                      <label> <input type="radio" className="gender-input" name="gender" value="female" onClick = {handleClick}/>여자</label> <br/>
                    </p>
                  </div>
                  <Link to="./test">
                    <button type="submit" disabled={disabled}>검사시작</button>
                  </Link>
              </form>
            </div>
    )
  }

  export default User;