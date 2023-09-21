import { useSelector } from "react-redux";
import { ToDoBgEffect } from "../../components/ui-componnets/svg-components/Svg";
import "./style/todo.css";
import { LogoBox, ProfileBox, AddBox } from "../../components/components";

function ToDo() {
  const state = useSelector((state) => state.userStateChanger.value);
  console.log(state);
  return (
    <div className="todo-page-container">
      <div className="todo-page-content-wrapper">
        <div className="todo-page-head-container">
          <LogoBox />
          <ProfileBox />
        </div>
        <div className="content-container">
          <AddBox/>
        </div>
      </div>
      <div className="bg-effect-container">
        <ToDoBgEffect />
      </div>
    </div>
  );
}

export default ToDo;
