import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      First Name:<input type="text" className='first-name' value=''/>
      <br/>
      Last Name:<input type="text" className='last-name' value=''/>
      <br/>
      Email:<input type="email"/>
      <br/>
      Password:<input type="password" value='' className="password"/>

    </div>
  );
}

export default App;
