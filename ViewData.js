import React, { useEffect, useState, forwardRef } from "react";
import firebase from "firebase";
import { db } from "../base";
import FlipMove from "react-flip-move";
import EditingPage from "./EditingPage";

const ref = db.collection("learning");

const ViewData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await ref.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setData(items);
    });
  };

  const deleteData = async (id) => {
    ref.doc(id).delete();
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div ref={ref}>
      <center>View the Data</center>
      <center>
        <FlipMove>
          {data.map(({ name, profile, id }) => (
            <div
              key={id}
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p> ⏲️ </p>
              <h3> {name} </h3>
              <p> {profile} </p>

              <p style={{ cursor: "pointer" }}>
                <EditingPage profile={profile} id={id} />
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteData(id);
                }}
              >
                {" "}
                ❌{" "}
              </p>
            </div>
          ))}
        </FlipMove>
      </center>
    </div>
  );
};

export default ViewData;
