import {useSelector} from "react-redux"
import { googleLogout } from "../../handle-api/handleLogoutApi"


function ToDo() {
  const state = useSelector((state)=>state.userStateChanger.value)
  console.log(state)
  return (
    <div onClick={googleLogout}>logout</div>
  )
}

export default ToDo