import "./style/add-box.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function AddBox() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="add-box">
        <div className="label-and-date-picker-container">
            <LabelPicker/>
        </div>
      {/* <p>{date.toLocaleDateString("en-GB")}</p> */}
      {/* <Calendar onChange={setDate} value={date} /> */}
    </div>
  );
}

function LabelPicker(){
    const [inputValue,setInputValue] = useState()
    console.log(inputValue)
    return(
        <div className="label-picker">
            <input value={`#`} type="text" onChange={(e)=>{setInputValue(e.value)}} />
        </div>
    )
}

export default AddBox;
