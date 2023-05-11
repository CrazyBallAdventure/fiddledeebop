import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedBeast: null, // This sets the SelectedBeast to nothing so that when the page loads there arent any beasts selected already
    };
  }

  handleSelectBeast = (beast) => {
    this.setState({ SelectedBeast: beast }); // Updates the state with the selected beast so the component can keep track of it
  };

  handleClose = () => {
    this.setState({ SelectedBeast: null }); // Closes the selected beast by setting the state to null
  };


  render() {
    return (
      <div>
        <Header /> {/* Renders my Header.js component */}
        <Main data={data} onSelectBeast={this.handleSelectBeast} /> {/* Renders my Main component with my data and the onSelectBeast function */}
        <SelectedBeast
          beast={this.state.SelectedBeast}
          handleClose={this.handleClose}
        /> {/* Renders SelectedBeast.js with whatever beast you have selected and the handleClose function */}
        <Footer /> {/* Renders my Footer.js component */}
      </div>
    );
  }
}

export default App;
