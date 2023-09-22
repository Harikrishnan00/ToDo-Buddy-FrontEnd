import "./style/add-box.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { CalenderIcon, PlusIcon } from "../../assets/icons/icons";

function AddBox() {
  return (
    <div className="add-box">
      <div className="label-and-date-picker-container">
        <LabelPicker />
        <DatePicker />
      </div>
      <div className="title-input-container">
        <input type="text" placeholder="Title"/>
      </div>
      <div className="todo-input-container">
        <ToDoInput />
      </div>
    </div>
  );
}

function ToDoInput(){
  const [todos,setTodos] = useState([])
  return (
    <div className="todo-input">
      <input type="checkbox"  hidden={true} />
      <div className="todo-checkbox">
        {/* <img src={CheckIcon} alt="" /> */}
      </div>
      <input type="text" placeholder="Task" className="todo-content-input"/>
      <img src={PlusIcon} alt="" className="plus-icon"/>
    </div>
  )
}

function LabelPicker() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="label-picker">
      <input
        type="text"
        value={`#${inputValue.toUpperCase()}`}
        placeholder="Label"
        onChange={(e) => {
          setInputValue(`${e.target.value.slice(1)}`);
        }}
      />
    </div>
  );
}

function DatePicker() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerCliked, setIsDatePickerCliked] = useState(false)
  return (
    <div className="calender" onClick={()=>setIsDatePickerCliked(!isDatePickerCliked)}>
      <img src={CalenderIcon} alt="" />
      <p>{date.toLocaleDateString("en-GB")}</p>
      <div className={!isDatePickerCliked ? "calender-container" : "calender-container show"}>
        <Calendar Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

export default AddBox;
