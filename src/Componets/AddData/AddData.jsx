import React, { useState } from "react";
import NewEntry from "../NewEntry/NewEntry";

const AddData = () => {
    let [wantToAdd, setWantToAdd] = useState(false);
    let [userData, setUserdata] = useState(JSON.parse(localStorage.getItem("userData"))!=null? JSON.parse(localStorage.getItem("userData")):[]  );
    function addData() {
        setWantToAdd(true);
    }
    function deleteData(deletedIdx) {
        let filteredData=userData.filter((ele,idx) => {
            return deletedIdx != idx;
        })
        
        localStorage.setItem("userData", JSON.stringify(filteredData));
        setUserdata(filteredData);
    }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Aadhar Number</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {userData.map((ele, idx) => {
            return (
              <tr key={idx + "a"}>
                <td>{ele.Name}</td>
                <td>{ele["Date of Birth"]}</td>
                <td>{ele["Aadhar Number"]}</td>
                <td>{ele["Mobile Number"]}</td>
                <td>{ele["Age"]}</td>
                <td onClick={() => deleteData(idx)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {wantToAdd ? (
        <NewEntry setWantToAdd={setWantToAdd} setUserdata={setUserdata} />
      ) : null}
      <button onClick={addData}>AddData</button>
    </div>
  );
};

export default AddData;
