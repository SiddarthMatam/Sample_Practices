import React from 'react'

function Practice() {
const a= 10;
var b =3;
let c = 4;
var data = [
    {name:"Sharath", age:27, role:"Developer"},
    {name:"Charan", age:28, role:"Devops"},
    {name:"Manju", age:35, role:"Tester"}
]
  return (
    <>
    <p>The value of a is {a}</p>
    <p>The value of b is {b}</p>
    <p>The value of c is {c}</p>
    <p>The role of 3rd employee is {data[0].age}</p>
    </>
  )
}

export default Practice