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
    console.log(allUser);
    let filteredData = allUser.filter((ele) => {
      return ele["Aadhar Number"] == adharnum;
    });
    console.log(filteredData);
    setRetrivedDat([...filteredData]);
  }
  return (
    <div>
      <input
        onChange={getAdharNumber}
        type="number"
        placeholder="Enter Aadhar Number"
      />
      <button onClick={getData}>Get Data</button>
      
        <div className="table-group-divider">
          {retrivedData.map((ele, idx) => {
            return (
              <div key={idx + "ab"}>
                <p>Name:-{ele.Name}</p>

                <p>Date of Birth{ele["Date of Birth"]}</p>

                <p>Aadhar Number:-{ele["Aadhar Number"]}</p>

                <p>Mobile Number:- {ele["Mobile Number"]}</p>

                <p>Age:- {ele["Age"]}</p>
                <p onClick={() => deleteData(idx)}>Delete</p>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default RetriveData;
