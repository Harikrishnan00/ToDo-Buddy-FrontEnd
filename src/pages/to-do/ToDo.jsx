import {useSelector} from "react-redux"


function ToDo() {
  const state = useSelector((state)=>state.userStateChanger.value)
  console.log(state)
  return (
    <div>ToDo</div>
  )
}

export default ToDo