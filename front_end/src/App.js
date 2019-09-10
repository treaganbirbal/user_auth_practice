import React from 'react';
import SignUp from './SignUp'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      
    }
  }
  render(){
    return(
      <div className='App'>
        <SignUp />
      </div>
    )
  }
}

export default App;
