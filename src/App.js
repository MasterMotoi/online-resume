import React, { Component } from 'react';
import './App.css';
import Experience from './Experience/Experience';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Info from './Info/Info';
import School from './School/School';
import Interest from './Interest/Interest';

class App extends Component {
  state = {
    displayed: <Experience />
  }

  displayedHandler = ( itemMenu ) => {
    this.setState({
      displayed: itemMenu 
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <ul id="navigation">
            <li onClick={this.displayedHandler.bind(this, <Experience />)}>Professionnal experiences</li>
            <li id="middle" onClick={this.displayedHandler.bind(this, <School />)}>Education</li>
            <li onClick={this.displayedHandler.bind(this, <Interest />)}>Other Interest</li>
          </ul>
          {this.state.displayed}
          <Info />
        </div>
      </div>
    );
  }
}

export default App;