import "./style/profile-box.css"
import {LogOutIcon} from "../../../assets/icons/icons"
import {Profile} from "../../../assets/images/images"
import { logout } from "../../../handle-api/handleLogoutApi";
 
function ProfileBox() {
  return (
    <div className="profile-box">
        <img className="profile-img" src={Profile} alt="profile-image" />
        <p>Harikrishnan</p>
        <img className="logout-icon" src={LogOutIcon} alt="logout" onClick={logout} />
    </div>
  )
}

export default ProfileBox