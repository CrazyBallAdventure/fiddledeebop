import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      votes: prevState.votes + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          className="image"
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.props.onClick}
        />
        {/* The vote button with the number of votes next to it */}
        <div>
          <button style={{backgroundColor: 'pink', margin: '2px', borderRadius: '5px', border: '2px solid red'}} onClick={this.handleClick}>❤️❤️❤️</button>
          <span>{this.state.votes}</span>
        </div>

        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
