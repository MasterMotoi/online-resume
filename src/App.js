import React, { Component } from 'react';
import './App.css';
import Experience from './Experience/Experience';
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
          <ul className="navigation">
            <li onClick={this.displayedHandler.bind(this, <Experience />)}>Professionnal experiences</li>
            <div id="middle"><li is="middleText" onClick={this.displayedHandler.bind(this, <School />)}>Education</li></div>
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