import React, { useState } from "react";
// import { json } from "react-router-dom";

const NewEntry = (props) => {
     let [alluser, setAllUser] = useState(
       localStorage.getItem("userData") != null
         ? JSON.parse(localStorage.getItem("userData"))
         : []
     );
  function saveData() {
    props.setWantToAdd(false);
    let newUser = {
      Name: username,
      "Date of Birth": dob,
      "Aadhar Number": aadhar,
      "Mobile Number": phoneNum,
      Age: age,
    };
    let newList = [...alluser, newUser];
    localStorage.setItem("userData", JSON.stringify(newList));
      props.setUserdata(newList);

    //   console.log(newUser);
  }
  function getName(e) {
    // console.log(e.target.value);
    setUserName(e.target.value);
  }
  function getDate(e) {
    // console.log(e.target.value);
    setDob(e.target.value);
  }
  function getAadhar(e) {
    // console.log(e.target.value);
    setAadhar(e.target.value);
  }
  function getNumber(e) {
    // console.log(e.target.value);
    setPhoneNum(e.target.value);
  }
  function getAge(e) {
    // console.log(e.target.value);
    setAge(e.target.value);
  }

  let [username, setUserName] = useState("");
  let [dob, setDob] = useState("");
  let [aadhar, setAadhar] = useState("");
  let [phoneNum, setPhoneNum] = useState("");
  let [age, setAge] = useState("");

  return (
    <div>
      <h1>Fill below form for New Entry</h1>
      <input onChange={getName} type="text" placeholder="Name" />
      <input onChange={getDate} type="date" />
      <input onChange={getAadhar} type="number" placeholder="Aadhar number" />
      <input onChange={getNumber} type="number" placeholder="Mobile number" />
      <input onChange={getAge} type="text" placeholder="Age" />
      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default NewEntry;
