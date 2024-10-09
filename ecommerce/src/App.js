import React from 'react'
import { useState } from 'react'
import './components/stylesquare.css'

export const App = () => {
   /* const [data, setData] = useState(
        {
            uname: "",
            pwd: "",
            mail: ""
        }
    )*/
    const [count, setCount] = useState(1)
    //const [username, password, email ] = data
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}> 
          Change 
        </button>
        <div className='square'>
        </div>
    </div>
  )
}
export default App;