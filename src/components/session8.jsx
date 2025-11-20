import React from 'react'
import './session8.css'
function Session8() {

    var emp_details = [
        {name: "Sharat", age: 'xx', state: "Karnataka"},
        {name: "Charan", age:'xx', state: "Andhra Pradesh"},
        {name: "Harsha", age:'xx', state: "Telangana"},
        {name: "Siddu", age:'xx', state: "Andhra Pradesh"},
    ];

  return (
    <>
    <div class="container">
        <div className="sub-container">
            <p className='heading'>Emp Name</p>
            <p className='heading'>Emp Age</p>
            <p className='heading'>Emp Place</p>
        </div><hr/>
        <div className="sub-container">
            <p>{emp_details[0].name}</p>
            <p>{emp_details[0].age}</p>
            <p>{emp_details[0].state}</p>
        </div><hr/>
        <div className="sub-container">
            <p>{emp_details[1].name}</p>
            <p>{emp_details[1].age}</p>
            <p>{emp_details[1].state}</p>
        </div><hr/>
        <div className="sub-container">
            <p>{emp_details[2].name}</p>
            <p>{emp_details[2].age}</p>
            <p>{emp_details[2].state}</p>
        </div><hr/>
        <div className="sub-container">
            <p>{emp_details[3].name}</p>
            <p>{emp_details[3].age}</p>
            <p>{emp_details[3].state}</p>
        </div>
    </div>
    </>
  )
}

export default Session8