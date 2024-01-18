import React, { useState } from "react";

const RetriveData = () => {
  let [retrivedData, setRetrivedDat] = useState([]);
  let [adharnum, setAdharNum] = useState(0);
  function getAdharNumber(e) {
    setAdharNum(e.target.value);
  }
  function getData() {
    let allUser = JSON.parse(
      localStorage.getItem("userData") != null
        ? localStorage.getItem("userData")
        : []
    );
    let filteredData = allUser.filter((ele) => {
      return ele["Aadhar Number"] == adharnum;
    });
    setRetrivedDat([...filteredData]);
  }
  return (
    <div className="px-3">
      <input
        className="py-1 px-1"
        onChange={getAdharNumber}
        type="number"
        placeholder="Enter Aadhar Number"
      />
      <button className="py-1 m-2  px-5 bg-primary text-white border border-0" onClick={getData}>Get Data</button>

      <div className="table-group-divider">
        {retrivedData.map((ele, idx) => {
          return (
            <div className="py-2" key={idx + "ab"}>
              <p>Name:-{ele.Name}</p>
              <p>Date of Birth:- {ele["Date of Birth"]}</p>
              <p>Aadhar Number:-{ele["Aadhar Number"]}</p>
              <p>Mobile Number:- {ele["Mobile Number"]}</p>
              <p>Age:- {ele["Age"]}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RetriveData;
