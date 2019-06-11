import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
import LightSwitch from './LightSwitch'

class App extends React.Component {
  //define the method render
  render() {

    //what it should return
    //React calls this App.render()
    //JSX <h1>Hallo!</h1>
    //you can not return undefined
    //you can return null if you want
    //strings, numbers, array of strings or react components
    
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Greeting />
         {/* you can insert values using curly braces*/}
         {/* what values are alloweded? */}
          { 'Welcome to React' }
          {/* { 5 + 5 } */}
          {/* {null}
          { true }
          { [] }
          { [<Greeting />, <Greeting />, <Greeting />]} */}
          
        </header>

        <main>
          <Title content="This is the Title"/>
          
          <div>
            <h3>User Board</h3>
          </div>
          <div>
            <p>
            "User: "<b>Alice</b>
            </p>
            <LightSwitch />
          </div>
          <div>
            <p>
            "User: "<b>Bob</b>
            </p>
            <LightSwitch />
          </div>
          <div>
            <p>
            "User: "<b>Chloe</b>
            </p>
            <LightSwitch />
          </div>
          
        </main>
      </div>
  )
  }
}
 
class Greeting extends React.Component {
  render() {
    return(
      <h1 className="App-title">Hallo!</h1>
    )
  }
}

export default App;
