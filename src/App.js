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
      SelectedBeast: null,
    };
  }

  handleSelectBeast = (beast) => {
    this.setState({ SelectedBeast: beast });
  };

  handleClose = () => {
    this.setState({ SelectedBeast: null });
  };


  render() {
    return (
      <div>
        <Header />
        <Main data={data} onSelectBeast={this.handleSelectBeast} />
        <SelectedBeast
          beast={this.state.SelectedBeast}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}

export default App;