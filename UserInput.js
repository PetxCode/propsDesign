import React, { useState, useEffect } from "react";

function UserInput({ name }) {
  const [input, setInput] = useState("");
  const [counting, setCounting] = useState(false);
  const [shouldAlert, setShouldAlert] = useState(false);

  useEffect(() => {
    const inputInt = parseInt(input);

    if (counting && input > 0) {
      setTimeout(() => {
        setInput(inputInt - 1);
      }, 1000);
    } else {
      if (shouldAlert) {
        alert("Your task just ended : " + name);
        setShouldAlert(false);
        setInput("");
      }
      setCounting(false);
    }
  }, [input, counting]);
  return (
    <div>
      <center>
        <div style={{ margin: "50px 0" }}>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div> {name} </div>
            <input
              disabled={counting}
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
              type="number"
              placeholder="Enter a value in sec"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              style={{
                backgroundColor: "lightblue",
                width: "100px",
                height: "40px",
                borderRadius: "20px",
                outlineWidth: "0",
                fontFamily: "Poppins",
                fontSize: "20px",
              }}
              onClick={(e) => {
                e.preventDefault();
                setCounting(true);
                setShouldAlert(true);
                console.log(input);
              }}
            >
              Start
            </button>
          </form>
        </div>
      </center>
    </div>
  );
}

export default UserInput;
