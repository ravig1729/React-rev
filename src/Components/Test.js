import React from 'react'  //default imported
import {useState} from 'react';  //named imported

const Test = () => {
    const [name, setName] = useState("JOHN");
    const [user, setUser] = useState({name :"JOhn", age:23})
    //return a state variable and a funvtion using which you can update the state value , because we do not have setState function in functional components, also it will taje the default value of the state variable.

    //named fun:variable whose value is equal to a fun.
    // const updateState = function() =>{

    // }
    const updateState= () =>{
      setName ("DOE");
    }
    const updateObjState = () =>{
        setUser((prevState) => ({
            ...prevState,
            age:40
        }))
    }

  return (
    <> 

      <h1>Hooks!!!</h1>
      <h3>useState, useEffect, and useContext, useReducer, useCallback, useMemo, memo, useRef</h3>
      <p>State variable name : {name} </p>
      <button onClick={updateState}>Click to update the state variable</button> <br></br>
      <button onClick={ () => setName("Viswanadh")}>Click to update the state variable using Arrow Func</button>
      <p>State as an object. {user.name} </p>
      <p>State variable age : {user.age} </p>
      <button onClick={updateObjState}>Click to update the state variable value</button>
    </>
  )
}

export default Test


//useState : definition, structure, how to use the state variable in dom, how to upate the state variable -> by creating the separate fun or by writing in the same line.
//prevState concept = this comes when you want to update the state variable  which is an object, strinngs...