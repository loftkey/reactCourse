import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andrew', age: 24},
      { name: 'Ramon', age: 27},
      { name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // DON'T DO THIS: this.state.persons[0].name = 'Westcott';
    this.setState({
      persons: [
        { name: newName, age: 24},
        { name: 'Ramon', age: 27},
        { name: 'Stephanie', age: 27},
      ]
    })
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 24},
        { name: event.target.value, age: 27},
        { name: 'Stephanie', age: 26},
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backggroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.switchNameHandler}
        >Switch Name</button>
        { this.state.showPersons ?
          <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            popy={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
            >My Hobbies: Hiking</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div> : null}
          
        </div>
    );
  }
}

export default App;
