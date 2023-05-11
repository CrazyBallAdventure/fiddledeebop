import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0, // The votes are set to 0 so when you visit there aren't votes already I tried to use Null for this but it has to be 0 because 0 is a value and the votes are counted and incremented and null isn't a a value it represents no value or nothingness
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      votes: prevState.votes + 1, // Updates votes by incrementing the previous value by 1
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2> {/* Renders the title of the beast */}
        <img
          className="image"
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.props.onClick}
        /> {/* Renders the image of the beast with the image URL, alt text, and title, and triggers the onClick function when clicked */}

        {/* Next is the vote button with the number of votes next to it */}
        <div>
          <button style={{backgroundColor: 'pink', margin: '2px', borderRadius: '5px', border: '2px solid red'}} onClick={this.handleClick}>❤️❤️❤️</button> {/* Renders the vote button and triggers the handleClick function when clicked */}
          <span>{this.state.votes}</span> {/* Renders the current number of votes */}
        </div>

        <p>{this.props.description}</p> {/* Renders the description of the beast */}
      </div>
    );
  }
}

export default HornedBeast;
