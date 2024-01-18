import React, { useState, useReducer } from "react";

const reducerFunc = (newUser, action) => {
  if (action.type === "NAME") {
    newUser.Name = action.payload.Name;
  } else if (action.type === "DATE") {
    newUser["Date of Birth"] = action.payload["Date of Birth"];
  } else if (action.type === "AADHAR") {
    newUser["Aadhar Number"] = action.payload["Aadhar Number"];
  } else if (action.type === "PHONE_NUMBER") {
    newUser["Mobile Number"] = action.payload["Mobile Number"];
  } else if (action.type === "AGE") {
    newUser["Age"] = action.payload["Age"];
  }
  return newUser;
};

const NewEntry = (props) => {
  function saveData() {
    props.setWantToAdd(false);
    let alluser =
      localStorage.getItem("userData") != null
        ? JSON.parse(localStorage.getItem("userData"))
        : [];
    let newList = [...alluser, currentState];
    localStorage.setItem("userData", JSON.stringify(newList));
    props.setUserdata(newList);
  }
  const [currentState, dispatchCurrentState] = useReducer(reducerFunc, {});

  return (
    <div>
      <h3>Fill below form for New Entry</h3>
      <div className="d-flex align-items-center flex-wrap gap-2">
        <input
          className="px-2 flex-grow-1"
          onChange={(e) => {
            dispatchCurrentState({
              type: "NAME",
              payload: {
                Name: e.target.value,
              },
            });
          }}
          type="text"
          placeholder="Name"
        />
        <input
          className="px-2  flex-grow-1"
          onChange={(e) => {
            dispatchCurrentState({
              type: "DATE",
              payload: {
                "Date of Birth": e.target.value,
              },
            });
          }}
          type="date"
        />
        <input
          className="px-2  flex-grow-1"
          onChange={(e) => {
            dispatchCurrentState({
              type: "AADHAR",
              payload: {
                "Aadhar Number": e.target.value,
              },
            });
          }}
          type="number"
          placeholder="Aadhar number"
        />
        <input
          className="px-2  flex-grow-1"
          onChange={(e) => {
            dispatchCurrentState({
              type: "PHONE_NUMBER",
              payload: {
                "Mobile Number": e.target.value,
              },
            });
          }}
          type="number"
          placeholder="Mobile number"
        />
        <input
          className="px-2  flex-grow-1"
          onChange={(e) => {
            dispatchCurrentState({
              type: "AGE",
              payload: {
                Age: e.target.value,
              },
            });
          }}
          type="text"
          placeholder="Age"
        />
        <button className="btn btn-primary px-5" onClick={saveData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewEntry;
