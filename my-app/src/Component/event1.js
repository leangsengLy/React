import React from 'react'

function event1() {
  // const click = () =>{
  //      alert('Hello every body');
  // }

  // declare arrow function
  const click = (massage) =>{
     alert(massage);
  }
  return (
    <button onClick={() => click('Hello Guy')}>click on me </button>
  )
}

export default event1