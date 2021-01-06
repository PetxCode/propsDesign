import React, { useState } from "react";
import firebase from "firebase";
import { db } from "../base";

const ref = db.collection("learning");

function PostData() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const postData = async () => {
    await ref.doc().set({
      name: name,
      profile: text,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      dateTime: Date.now(),
    });
  };

  return (
    <div>
      <center>Posting data</center>
      <form
        style={{
          marginTop: "50px",

          display: "flex",
          flexDirection: "column",
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
            marginBottom: "20px",
          }}
          type="text"
          placeholder="Enter the Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
            marginBottom: "20px",
          }}
          type="text"
          placeholder="Enter the Profile"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          style={{
            // display: "none",
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
            postData();
            console.log(text, name);
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default PostData;
