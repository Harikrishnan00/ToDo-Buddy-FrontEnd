import "./style/add-box.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { CalenderIcon, PlusIcon } from "../../assets/icons/icons";

function AddBox() {
  const [todos, setTodos] = useState([]);

  const todoAdder = (value) => {
    setTodos([...todos, value]);
    console.log(todos);
  };
  const editTodos = (value, index) => {
    const temparray = todos
    temparray[index] = value
    setTodos(temparray)
  };

  return (
    <div className="add-box">
      <div className="label-and-date-picker-container">
        <LabelPicker />
        <DatePicker />
      </div>
      <div className="title-input-container">
        <input type="text" placeholder="Title" />
      </div>
      <div className="todo-input-container">
        {todos?.map((todo, index) => {
          return (
            <ToDoInput
              key={index}
              index={index}
              todo={todo}
              editTodos={editTodos}
              todoAdder={()=>console.log("dummy")}
            />
          );
        })}
        <ToDoInput
          todoAdder={todoAdder}
          editTodos={() => {
            console.log("first gggggg");
          }}
        />
      </div>
    </div>
  );
}

function ToDoInput({ todoAdder, todo, editTodos, index }) {
  const [todoInpuvalue, setTodoInpuvalue] = useState("");

  useEffect(() => {
    if (todo) {
      setTodoInpuvalue(todo);
    }
  }, [todo]);

  return (
    <div className="todo-input">
      <input type="checkbox" hidden={true} />
      <div className="todo-checkbox"></div>
      <input
        type="text"
        placeholder="Task"
        value={todoInpuvalue}
        onChange={(e) => {
          setTodoInpuvalue(e.target.value);
        }}
        className="todo-content-input"
      />

      <img
        src={PlusIcon}
        alt=""
        className="plus-icon"
        onClick={() => {
          if (todoInpuvalue && index===undefined) {
            console.log("first")
            todoAdder(todoInpuvalue);
            setTodoInpuvalue("");
          }else if(todoInpuvalue && index!==undefined){
            editTodos(todoInpuvalue,index)
            setTodoInpuvalue(todoInpuvalue);
          }
        }}
      />
    </div>
  );
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
  const [isDatePickerCliked, setIsDatePickerCliked] = useState(false);
  return (
    <div
      className="calender"
      onClick={() => setIsDatePickerCliked(!isDatePickerCliked)}
    >
      <img src={CalenderIcon} alt="" />
      <p>{date.toLocaleDateString("en-GB")}</p>
      <div
        className={
          !isDatePickerCliked ? "calender-container" : "calender-container show"
        }
      >
        <Calendar Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

export default AddBox;
