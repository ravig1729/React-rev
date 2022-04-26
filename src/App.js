import React, { useState } from 'react'
import Test  from "./Components/Test";
import TestUseEffect from './Components/useEffectHooks';

const App = () => {

  const[showComp, setShowComp] = useState(true);
  return (
    <div className = 'App'>
    <Test/>,  
    {showComp ? <TestUseEffect/> : null}
    <button onClick={() =>setShowComp(false)}>Unmount useEffect Component</button>
    </div>
  )
}

export default App