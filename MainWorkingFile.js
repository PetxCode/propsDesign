import React from "react";
import UserInput from "./UserInput";

function MainWorkingFile() {
  const [text, setText] = React.useState("");
  const [timerName, setTimerName] = React.useState([]);

  const enterName = () => {
    setTimerName([...timerName, text]);
    console.log(text);
    setText("");
  };

  return (
    <div>
      <center style={{ marginBottom: "60px" }}>This is for User Input</center>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: "300px",
            height: "60px",
            borderRadius: "30px",
            border: "1px solid lightblue",
            marginRight: "20px",
            outlineWidth: "0",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontFamily: "Poppins",
            fontSize: "20px",
            marginLeft: "20px",
          }}
          type="text"
          placeholder="Enter the Title"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            display: "none",
            backgroundColor: "red",
            color: "white",
            width: "100px",
            height: "40px",
            borderRadius: "20px",
            outlineWidth: "0",
            fontFamily: "Poppins",
            fontSize: "20px",
          }}
          onClick={(e) => {
            e.preventDefault();
            enterName();
          }}
        >
          Enter
        </button>
      </form>
      <center>
        {" "}
        {timerName.map((timer, i) => (
          <div key={i}>
            <UserInput name={timer} />
          </div>
        ))}
      </center>
    </div>
  );
}

export default MainWorkingFile;
