import {ToDoLogo} from "../../../assets/images/images"
import "./style/logobox.css"

function LogoBox() {
  return (
    <div className="logo-box">
        <img src={ToDoLogo} alt="" />
        <h2>TO-DO BUDDUY</h2>
    </div>
  )
}

export default LogoBox