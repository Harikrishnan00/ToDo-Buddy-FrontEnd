import { SignupBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import "./style/signup.css";
import { useEffect } from "react";
import { Header,Form } from "../../components/components";
import {useSelector} from "react-redux"


function signup() {
  const {isUserLogged} = useSelector((state)=>state.userStateChanger)

  useEffect(()=>{
    if(isUserLogged){
      window.location.href = "http://localhost:5173/todo";
    }
  }
  ,[isUserLogged])

  return (
    <div className="signup-page-container">
      <div className="signup-inner-box">
        <div className="signup-inner-bg">
          <SignupBgEffect />
        </div>
        <div className="signup-content-container">
          <Header />
          <div className="form-container">
            <Form title={"SIGNUP"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
