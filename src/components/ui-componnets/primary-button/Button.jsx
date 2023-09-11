import { useState } from "react";
import "./style/button.css";

function Button({routeNavigate,url}) {
  const [buttonText, setButtonText] = useState("signup");
  return <button className="button" onClick={()=>routeNavigate(url)}>{buttonText}</button>;
}

export default Button;
