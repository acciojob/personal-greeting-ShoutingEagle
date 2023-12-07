
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState('');
  const [hello,sethello] = useState('');

  useEffect(() => {
    if(name !== ''){
      sethello(`Hello ${name}!`);
    }
    else{
      sethello('');
    }
  },[name])


  function handleChange (event) {
    setName(event.target.value);
    
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label>
        <br/><br/>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <br/><br/>
        <p>{hello}</p>


    </div>
  )
}

export default App
