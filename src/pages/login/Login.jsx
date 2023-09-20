
import { SignupBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import {Header,Form} from "../../components/components"
import { useEffect } from "react";
import {useSelector} from "react-redux"

function Login() {
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
            <Form title={"LOGIN"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login