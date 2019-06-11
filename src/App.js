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
          <Greeting />
          { 'Welcome to React ' }
          { 2019 }
         {/* you can insert values using curly braces*/}
         {/* what values are alloweded? */}
          {/* { 5 + 5 } */}
          {/* {null}
          { true }
          { [] }
          { [<Greeting />, <Greeting />, <Greeting />]} */}
          
        </header>

        <main>
          <Title content="Title content"/>
          
          <div>
            <h3>User Board</h3>
          </div>
          <div>
            {/* passing Alice as a prop to lightswitch */}
            <LightSwitch user={"Alice"}/>
          </div>
          <div>
            <LightSwitch user={"Bob"} />
          </div>
          <div>
            <LightSwitch user={"Chloe"}/>
          </div>
          <div>
            <LightSwitch user={"Duke"}/>
          </div>
          <div>
            <LightSwitch user={"Edison"}/>
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
