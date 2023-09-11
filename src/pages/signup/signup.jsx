import { SignupBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import "./style/signup.css";
import { Header,Form } from "../../components/components";



function signup() {
  console.log(import.meta.env.VITE_API_URL)
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
