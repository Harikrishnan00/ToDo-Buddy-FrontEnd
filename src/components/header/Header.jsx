import "./style/header.css";
import {ToDoLogo} from "../../assets/images/images"
import {Button} from "../components"
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  
  // To navigate to urls
  const routeNavigate = (url) =>{
    navigate(url)
  }

  return <div className="header-container">
    <div className="logo-container">
      <img src={ToDoLogo} alt="" onClick={()=>routeNavigate("/")}/>
      <h2 onClick={()=>routeNavigate("/")}>TO-DO-BUDDY</h2>
    </div>
    <div className="navigation-container">
      <button className="login-btn btn" onClick={()=>routeNavigate("/login")}>login</button>
      <Button routeNavigate={routeNavigate} url={"/signup"}/>
    </div>
  </div>;
}

export default Header;
