import "../css/index.css"
import React  from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function Home(){
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange"
  });
  let userName = ''
  let userGender = '';
  const { isValid, errors } = formState;
  const onSubmit = (data) => {

  };

  const handleOnclick = (e) => {
      userGender=e.target.value;
      sessionStorage.setItem("gender", userGender);
  }
  const handleOnchange = (e) => {
      userName=e.target.value;
      sessionStorage.setItem("name", userName);
  }

  return (
    <div className="main-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title"> 직업가치관검사 </div>
                  <div className="input-form">
                    <p>
                      이름 <br/>
                      <input {...register("name", {required: true})} type="text" className="name-input" placeholder="이름" onChange={handleOnchange}/>
                      {errors.name && <p>이름을 입력해주세요.</p>} 
                    </p>
                    <p>
                      성별 <br/>
                      <label><input {...register("gender", { required: true })} type="radio" value="100323" onClick={handleOnclick}/>남성</label>
                      <label><input {...register("gender", { required: true })} type="radio" value="100324" onClick={handleOnclick}/>여성</label>
                      </p>
                  </div>
                    <button type="submit" disabled={!isValid} onClick={()=>{
                      history.push('/example');
                    }}>검사시작</button>
              </form>
            </div>
    );
  }
  export default Home;