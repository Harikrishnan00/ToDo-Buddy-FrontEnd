
import { SignupBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import {Header,Form} from "../../components/components"

function Login() {
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